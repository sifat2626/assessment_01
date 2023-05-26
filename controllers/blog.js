const Blog = require('../models/blog');
const User = require("../models/user");
exports.create = async (req,res) =>{
    try{
        const{title,content} = req.body;
        const user = await User.findById(req.user);
        const author = user.name;
        const blog = await new Blog({title, author, content,user}).save();
        res.status(201).json(blog)
    }catch(error){
        res.status(400).json(error)
    }
}
exports.read = async (req,res) => {
    try{
        const blog = await Blog.findById(req.params._id);
        res.status(200).json(blog)
    }catch(error){
        res.status(400).json(error)
    }
}
exports.getAllBlogsByUser = async (req, res) => {
    try{
        const {author} = req.body;
        const blogs = await Blog.find({author});
        res.status(200).json(blogs)
    }catch (error) {
        res.status(400).json(error)
    }
}
exports.update = async (req,res) => {
    try {
        const { title, content } = req.body;
        const blog = await Blog.findById(req.params._id);

        if (req.user._id !== blog.user) {
            return res.status(401).json({ message: "Author didn't match" });
        }

        const updatedBlog = await Blog.findByIdAndUpdate(
            req.params._id,
            { title, content },
            { new: true }
        );

        res.status(201).json(updatedBlog);
    } catch (error) {
        res.status(400).json(error);
    }
}
exports.remove = async (req,res) => {
    try{
        let blog = await Blog.findById(req.params._id);
        if(req.user._id!=blog.user){
            return res.status(401).json({message: "Author didn't match"})
        }
        blog = await Blog.findByIdAndDelete(req.params._id)
        res.status(204).json(blog)
    }catch(error){
        res.status(400).json(error)
    }
}