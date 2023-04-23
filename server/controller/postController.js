const Post = require('../schema/postSchema');

exports.getPosts = async(req,res) => {
    try{
        const allPosts = await Post.find();
        res.json(allPosts);
    }catch(err){
        throw err
    }
};

exports.getPostById = async(req,res) => {
    try{
        const specificPost = await Post.findById(req.params.id)
        res.json(specificPost)
    }catch(err){
        throw err
    }
}

exports.createPost = async(req,res) => {
    try{
        // database query start
        const newPost = await Post.create(req.body)
        // database query end
        res.json(newPost)
    }catch(err){
        throw err
    }
}

exports.updatePost = async(req,res) => {
    try{
        const dummyPost = await Post.findByIdAndUpdate(req.params.id,req.body,{new:true})
        // const dummyPost = await Post.updateOne({_id:req.params.id}, req.body);
        res.json(dummyPost)
    }catch(err){
        throw err
    }
}

exports.updatePosts = async(req,res) => {
    try{
        const tempPosts = await Post.updateMany({creator:req.query.creator},req.body,{new:true})
        res.json(tempPosts)
    }catch(err){
        throw err
    }
}

exports.deletePostById = async(req,res) => {
    try{
        const currPosts = await Post.findByIdAndDelete(req.params.id)
        res.json({message:`${req.params.id} Deleted Successfully`})
    }catch(err){
        throw err
    }
}