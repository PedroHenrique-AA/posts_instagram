import { postsService } from "../services/posts.services.js";

class PostsController{
    async getAll(_req,res){
        const post = await postsService.getAll();
        res.status(200).json(post);
    }
    async getById(req,res){
        const postId = req.params.id;
        const postPorId = await postsService.getAll(postId);
        res.status(200).json(postPorId);
    }
    async create(req,res){
        const postCriado = await postsService.getAll(req.body);
        res.status(201).json(postCriado);
    }
    async delete(req,res){
        const postId = req.params.id;
        const postDeletado = await postsService.getAll(postId);
        res.status(200).json(postDeletado);
    }
    async updatePut(req,res){
        const postId = req.params.id;
        const postAtualizado = await postsService.getAll(postId,req.body);
        res.status(201).json(postAtualizado);
    }
};
export const postsController = new PostsController();