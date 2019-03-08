'use strict'

const p = require('../proxy')
const ProjectProxy = p.Project

exports.create = function * () {
    const NAME = this.checkBody('NAME').notEmpty('项目名不能为空').value
    const URL = this.checkBody('URL').notEmpty('项目地址不能为空').isUrl('URL地址不合法',['http','https']).value
    //mockUrl是项目的唯一模拟请求标识
    const MOCK_URL = this.checkBody('MOCK_URL').notEmpty('模拟数据地址不能为空').value
    const ICON = this.checkBody('ICON').value
    const REMARK = this.checkBody('REMARK').value
    const RESPONSE_ROLE = this.checkBody('RESPONSE_ROLE').value
    if(this.errors){
        this.body = this.util.refail('入参异常',this.errors,null)
        return
    }

    /**
     * 出参格式未定义，取系统默认数据返回模板
     * 数据模板必须标明字段类型
     * {
     *      message:String||'',
     *      data:Array||[] / {}||Object,
     *      success:Boolean||true/false
     * }
     */
    if(!!RESPONSE_ROLE){
        this.util.checkJsonRole(RESPONSE_ROLE)
    }

    const project = yield ProjectProxy.findOne({
        $or:[{NAME},{URL},{MOCK_URL}]
    })
    if(project){
        if(project.NAME === NAME){
            this.body = this.util.refail('创建失败，与现有项目同名')
        }else if(project.URL === URL){
            this.body = this.util.refail('创建失败，与现有项目的URL相同')
        }else{
            this.body = this.util.refail('创建失败，与现有项目的MOCK_URL相同')
        }
        return
    }
    yield ProjectProxy.newAndSave({
        NAME,
        URL,
        MOCK_URL,
        ICON,
        RESPONSE_ROLE,
        REMARK
    })
    this.body = this.util.resuccess('创建成功')
}

exports.updateById = function * () {
    const projectId = this.checkBody('_id').notEmpty('项目ID不能为空').value
    const name = this.checkBody('NAME').notEmpty('项目名不能为空').value
    const url = this.checkBody('URL').notEmpty('项目地址不能为空').value
    const mockUrl = this.checkBody('MOCK_URL').notEmpty('模拟数据地址不能为空').value
    const role = this.checkBody('RESPONSE_ROLE').value
    const remark = this.checkBody('REMARK').value
    const state = this.checkBody('STATE').toInt().value
    const create_time = this.checkBody('CREATE_TIME').value
    if(this.errors){
        this.body = this.util.refail('入参异常',this.errors)
        return
    }
    if(!!role){
        this.util.checkMockRole(role)
    }
    const project = yield projectExistCheck(projectId)
    if(project){
        const existQuery = {
            _id: { $ne: project._id },
            $or: [{URL: url}, {NAME: name}]
        }
        const existProject = yield ProjectProxy.findOne(existQuery)
        if (existProject) {
            if (existProject.NAME === name) {
                this.body = this.util.refail('更新失败，与现有项目同名')
            } else {
                this.body = this.util.refail('更新失败，与现有项目的 URL 相同')
            }
            return
        }
        project.URL = url || project.URL
        project.NAME = name || project.NAME
        project.MOCK_URL = mockUrl || project.MOCK_URL
        project.RESPONSE_ROLE = role || project.RESPONSE_ROLE
        project.STATE = state || project.STATE
        project.REMARK = remark || project.REMARK
        project.CREATE_TIME = create_time || _moment().format('YYYY-MM-DD HH:mm:ss')
        project._id = projectId || project._id
        yield ProjectProxy.updateById2(project)
    }else{
        this.body = this.util.refail('更新的项目不存在')
        return
    }
    this.body = this.util.resuccess('更新成功')
}

exports.list = function * () {
    let filterByState,projectId
    if(this.method==='GET'){
        filterByState = this.checkQuery('STATE').empty().toInt().default(0).value
        projectId = this.checkQuery('ID').empty().value
    }else{
        filterByState = this.checkBody('STATE').empty().toInt().default(0).value
        projectId = this.checkBody('ID').empty().value
    }
    if (this.errors) {
        this.body = this.util.refail(this.errors)
        return
    }
	let where
    if(projectId){
		where = {STATE: filterByState,_id:projectId}
	}else{
		where = {STATE: filterByState}
	}

    let projects = yield ProjectProxy.find(where,{})
    this.body = this.util.resuccess('查询成功',projects)
}

exports.removeById = function * (){
    let projectId
    if(this.method==='GET'){
        projectId = this.checkQuery('ID').notEmpty('项目ID不能为空').value
    }else{
        projectId = this.checkBody('ID').notEmpty('项目ID不能为空').value
    }
    if(this.errors){
        this.body = this.util.refail(this.errors,null)
        return
    }
    const project = yield projectExistCheck(projectId)
    if(project){
        yield ProjectProxy.removeById({_id:projectId})
        this.body = this.util.resuccess('删除成功')
        return
    }else{
        this.body = this.util.refail('删除的项目不存在')
    }
}

function projectExistCheck (id) {
    return ProjectProxy.findOne({_id:id}).then((project) => {
        return project
    })
}












exports.WAPList = function * () {
	const filterByState = this.checkBody('STATE').empty().toInt().default(0).value
	if (this.errors) {
		this.body = this.util.refail(this.errors)
		return
	}
	let where = { STATE: filterByState}
	let projects = yield ProjectProxy.findWAP(where,{})
	this.body = this.util.resuccess('查询成功',projects)
}

exports.auditWAP = function * () {
	const id = this.checkBody('ID').notEmpty().value
	const _PROJECT = this.checkBody('_PROJECT').notEmpty().value
	const name = this.checkBody('NAME').notEmpty().value
	const remark = this.checkBody('REMARK').value
	const url = this.checkBody('URL').notEmpty().match(/^\/.*$/i, 'URL 必须以 / 开头').value
	const create_time = this.checkBody('CREATE_TIME').notEmpty().value
	const update_time = this.checkBody('UPDATE_TIME').notEmpty().value
	if(this.errors){
		this.body = this.util.refail(this.errors,null)
		return
	}
	const saveQuery = {
		_id: _PROJECT,
		NAME: name,
		URL: url,
		REMARK: remark || name,
		CREATE_TIME: create_time,
		UPDATE_TIME: update_time
	}
	yield ProjectProxy.updateById2(saveQuery)
	yield ProjectProxy.removeWAP({_id:id})
	this.body = this.util.resuccess('审核成功')
}

exports.backWAP = function * () {
	const id = this.checkBody('ID').notEmpty().value
	if(this.errors){
		this.body = this.util.refail(this.errors,null)
		return
	}
	yield ProjectProxy.removeWAP({_id:id})
	this.body = this.util.resuccess('驳回成功')
}

