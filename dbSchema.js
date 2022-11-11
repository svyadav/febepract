const mongoose=require('mongoose')
const validator=require('validator')

var userSchema=new mongoose.Schema({
    firstName:{type:'String',required:true},
    lastName:{type:'String',required:true},
    email:{
        type:'String',
        required:true,
        lowerCase:true,
        validate:(value)=>{
            return validator.isEmail(value)
        }
    },
    password:{type:'String',required:true},
    role:{type:'String',default:'Student'},
    createdAt:{type:Date,default:Date.now()}
})

let usersModel=mongoose.model('users',userSchema)
module.exports={mongoose,usersModel}