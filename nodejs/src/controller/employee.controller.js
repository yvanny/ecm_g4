
var data_emp = [
    {
        id :1 ,
        name : "Mr. SOk",
        salary  : 100
    },
    {
        id :2 ,
        name : "Mr. Som",
        salary  : 300
    },
    {
        id :3 ,
        name : "Mr. Bona",
        salary  : 400
    }
];

const getAll = (req,res) => {
    // intergard db
    res.json({
        list : data_emp
    })
}
const getOne = (req,res) =>{
    var id = req.params.id
    var dataTmp = []
    for(var i = 0 ; i < data_emp.length ; i ++){
        if(id == data_emp[i].id){
            dataTmp.push(data_emp[i]) 
            break;
        }
    }
    res.json({
        list: dataTmp
    })
}
const create = (req,res) =>{
    var id = req.body.id
    var name = req.body.name 
    var salary = req.body.salary

    // required properties
    var message = ""
    if(id == "" || id == null){
        message = "param id required!"
    }else if(name == "" || name == null){
        message = "param name required!"
    }else if(salary == "" || salary == null){
        message = "param salary required!"
    }

    if(message != ""){
        res.json({
            error: true,
            msg: message
        })
        return
    }

    // existing id
    var isFound = 0
    for(var i = 0 ; i < data_emp.length ; i++){
        if(id == data_emp[i].id){
            isFound = 1;
            break;
        }
    }

    if(isFound == 1){ // case exist id in list
        res.json({
            error:true,
            message:"Id already exist. Please other!"
        })
        return
    }

    // var {id,name,salary} = req.body
    var objEmployee = {
        id : id,
        name :name,
        salary : salary
    }
    data_emp.push(objEmployee)
    res.json({
        message:"Create successfully",
        list:data_emp
    })
}
const update = (req,res) =>{
    var {id,name,salary} = req.body
    for(var i = 0 ; i < data_emp.length ; i ++){
        if(id == data_emp[i].id){
            // update 
            data_emp[i].id = id 
            data_emp[i].name = name
            data_emp[i].salary = salary
        }
    }
    res.json({
        message:"Update success",
        list:data_emp
    })
}

const remove = (req,res) =>{
    var id = req.params.id // get param id
    var dataTmp = []
    for(var i = 0 ; i < data_emp.length ; i++){
        if(id != data_emp[i].id){
            dataTmp.push(data_emp[i])
        }
    }
    data_emp = dataTmp // assing new value
    res.json({ 
        message :  "remove success",
        list : data_emp
    })
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove
}