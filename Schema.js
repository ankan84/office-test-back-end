const mongoose =require('mongoose')


const data=new mongoose.Schema({
    project_no:{
        type:String,
        required:true
    },
    project_name:{
        type:String,
        required:true
    },
    company_name:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    }


})


const Data=mongoose.model('user_data',data)

module.exports=Data;