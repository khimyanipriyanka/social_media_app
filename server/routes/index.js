const express = require('express');
const {getPosts, createPost,updatePost,updatePosts,getPostById,deletePostById} = require('../controller/postController');

const router = express.Router();

router.get('/',getPosts);
router.get('/getPostById/:id',getPostById);
router.post('/',createPost);
router.put('/:id',updatePost);
router.put('/updatePosts',updatePosts);
router.delete('/:id',deletePostById);

module.exports = router;

