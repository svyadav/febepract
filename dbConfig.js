const mongodb=require('mongodb');
const dbName='Register'
const dbUrl=`mongodb+srv://sachinyadav:Developer123@sachin.uhlse2y.mongodb.net/${dbName}test`
const MongoClient=mongodb.MongoClient

module.exports={mongodb,dbName,dbUrl,MongoClient}