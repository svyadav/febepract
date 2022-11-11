const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const saltRound=10;
const secretkey='KJDHYHFJEBFJJVB'


let hashPassword=async(password)=>{

    let salt=await bcrypt.genSalt(saltRound)
    let hashedPassword=await bcrypt.hash(password,salt)
    return hashedPassword
}

let hashCompare=async(password,hashedPassword)=>{
    return bcrypt.compare(password,hashedPassword)

}

let createToken=async(email,role)=>{
    let token=await jwt.sign({email,role},secretkey,{expiresIn:'1m'})
    return token

}

let jwtDecode=async(token)=>{
    let data=await jwt.decode(token)
    return data
}

let validate=async(req,res,next)=>{
    let token=req.headers.authorization.split(" ")[1]
 let data=await jwtDecode(token)
 let currentTime=Math.round(new Date()/1000)
 if(currentTime<=data.exp)
 next()
 else{
    res.send({
        statusCode:401,
        message:"Token expired"
    })
 }
}


let roleAdmin=async(req,res,next)=>{
    let token=req.headers.authorization.split(" ")[1]
 let data=await jwtDecode(token)
 let currentTime=Math.round(new Date()/1000)
 if(data.role==="Admin")
 next()
 else{
    res.send({
        statusCode:401,
        message:"Unauthorized:Only admin can access "
    })
 }
}

module.exports={hashPassword,hashCompare,createToken,jwtDecode,validate,roleAdmin}