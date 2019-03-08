'use strict'
const p = require('../proxy')
const InterfaceProxy = p.Interface
const ProjectProxy = p.Project

exports.create = function * () {
    const OP_NAME = this.checkBody('OP_NAME').notEmpty('接口名称不能为空').value
    //url是接口的唯一模拟请求标识
    const URL = this.checkBody('URL').notEmpty().match(/^\/.*$/i, 'URL 必须以 / 开头').value
    const IN_PARAMS = this.checkBody('IN_PARAMS').notEmpty('入参不能为空').value
    const OUT_PARAMS = this.checkBody('OUT_PARAMS').notEmpty('出参不能为空').value
    const _PROJECT = this.checkBody('PROJECT_ID').notEmpty('项目ID不能为空').value
    const METHOD = this.checkBody('METHOD').notEmpty('请求类型不能为空').value
    const REMARK = this.checkBody('REMARK').value
    const MOCK_ROLE = this.checkBody('OUT_PARAMS').value

    if(this.errors){
        this.body = this.util.refail('入参异常',this.errors)
        return
    }
    this.util.checkMockRole(OUT_PARAMS)
    this.util.checkJsonRole(IN_PARAMS)

    const project = yield ProjectProxy.findOne({_id:_PROJECT})
    if(!project){
        this.body = this.util.refail('接口所属项目不存在')
        return
    }
    const findQuery = {
        $or: [{URL: URL}, {OP_NAME: OP_NAME}],
        $and: [{_PROJECT:_PROJECT}]
    }
    const inter_face = yield InterfaceProxy.findOne(findQuery)
    if(inter_face){
        this.body = inter_face.OP_NAME === OP_NAME
            ? this.util.refail('创建接口失败，与现有接口同名')
            : this.util.refail('创建接口失败，与现有接口的 URL 相同')
        return
    }
    yield InterfaceProxy.newAndSave({
        OP_NAME,
        URL,
        _PROJECT,
        IN_PARAMS,
        OUT_PARAMS,
        MOCK_ROLE,
        METHOD,
        REMARK: REMARK || ''
    })
    this.body = this.util.resuccess('创建成功')
}

exports.list = function * () {
    let projectId,filterByState,searchKey,pageSize,pageIndex
    if(this.method==='GET'){
        pageSize = this.checkQuery('PAGE_SIZE').empty().value
        pageIndex = this.checkQuery('PAGE_INDEX').empty().value
        searchKey = this.checkQuery('SEARCH_KEY').empty().value
        projectId = this.checkQuery('PROJECT_ID').notEmpty('项目ID不能为空').value
        filterByState = this.checkQuery('STATE').empty().toInt().gt(0).default(0).value
    }else{
        pageSize = this.checkBody('PAGE_SIZE').empty().value
        pageIndex = this.checkBody('PAGE_INDEX').empty().value
        searchKey = this.checkBody('SEARCH_KEY').empty().value
        projectId = this.checkBody('PROJECT_ID').notEmpty('项目ID不能为空').value
        filterByState = this.checkBody('STATE').empty().toInt().gt(0).default(0).value
    }

    if (this.errors) {
        this.body = this.util.refail('查询失败', this.errors)
        return
    }
    let where
    if(searchKey){
        searchKey = new RegExp(searchKey, 'i');
        where = {
            $or:[
                {OP_NAME: {$regex:searchKey}},
                {REMARK:{$regex:searchKey}},
                {URL:{$regex:searchKey}},
                {IN_PARAMS:{$regex:searchKey}},
                {CREATE_USER:{$regex:searchKey}}
            ],
            $and:[{_PROJECT:projectId,STATE: filterByState}]
        }
    }else{
        where = {STATE: filterByState,_PROJECT:projectId}
    }
    let interfaceObj
    if(pageSize&&pageIndex){
        const count = yield InterfaceProxy.count(where,{})
        interfaceObj = yield InterfaceProxy.queryByPage(where,{},pageSize,pageSize*(pageIndex-1))
        this.body = this.util.resuccessLimit('查询成功',interfaceObj,count)
        return
    }else {
        interfaceObj = yield InterfaceProxy.find(where,{})
    }
    this.body = this.util.resuccess('查询成功',interfaceObj)
}

exports.updateById = function * () {
    const projectId = this.checkBody('PROJECT_ID').notEmpty('项目ID不能为空').value
    const method = this.checkBody('METHOD').notEmpty('请求类型不能为空').value
    const inParams = this.checkBody('IN_PARAMS').notEmpty('入参不能为空').value
    const outParams = this.checkBody('OUT_PARAMS').notEmpty('出参不能为空').value
    const intfaceId = this.checkBody('_id').notEmpty('接口ID不能为空').value
    const name = this.checkBody('OP_NAME').notEmpty('接口名不能为空').value
    const url = this.checkBody('URL').notEmpty().match(/^\/.*$/i, 'URL 必须以 / 开头').value
    const remark = this.checkBody('REMARK').value
    const state = this.checkBody('STATE').value

    if(this.errors){
        this.body = this.util.refail(this.errors)
        return
    }

    this.util.checkMockRole(outParams)
    this.util.checkJsonRole(inParams)

    const findQuery = {
        _id: { $ne: intfaceId },
        $or: [{URL: url}, {OP_NAME: name}],
        $and: [{_PROJECT:projectId}]
    }
    const _intface = yield InterfaceProxy.findOne(findQuery)
    if(_intface){
        this.body = _intface.OP_NAME === name
            ? this.util.refail('更新接口失败，与现有接口同名')
            : this.util.refail('更新接口失败，与现有接口的 URL 相同')
        return
    }

    const intface = yield InterfaceProxy.findOne({_id:intfaceId})
    if(intface){
        intface.URL = url || intface.URL
        intface.OP_NAME = name || intface.OP_NAME
        intface.STATE = state || intface.STATE
        intface.REMARK = remark || intface.REMARK
        intface.METHOD = method || intface.METHOD
        intface.IN_PARAMS = inParams || intface.IN_PARAMS
        intface.OUT_PARAMS = outParams || intface.OUT_PARAMS
        intface.MOCK_ROLE = outParams || intface.MOCK_ROLE
        intface._PROJECT = projectId || intface._PROJECT
        yield InterfaceProxy.updateById2(intface)
        this.body = this.util.resuccess('接口更新成功')
        return
    }
    this.body = this.util.refail('不存在当前接口，接口更新失败')
}

exports.removeById = function * () {
    let intfaceId
    if(this.method==='GET'){
        intfaceId = this.checkQuery('ID').notEmpty().value
    }else{
        intfaceId = this.checkBody('ID').notEmpty().value
    }
    if(this.errors){
        this.body = this.util.refail(this.errors,null)
        return
    }
    const intface = yield InterfaceProxy.findOne({_id:intfaceId})
    if(intface){
        yield InterfaceProxy.removeById({_id:intfaceId})
        this.body = this.util.resuccess('删除成功')
        return
    }
    this.body = this.util.refail('不存在当前接口，接口删除失败')
}
