const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    title:{type:String,trim:true},
    author:{type:String,trim:true},
    user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    content:{type:String,trim:true},
    createdAt:{type:Date,default:Date.now()}
},{timeStamp:true,versionKey:false})

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;