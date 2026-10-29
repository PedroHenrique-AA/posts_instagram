import { postsRepository } from "../repositories/post.repository.js";

class PostsService{
    async getAll(){
        const posts = await postsRepository.getAll();
        return posts;
    }
    async getById(id){
        const postPorId = await postsRepository.getById(id);
        return postPorId;
    }
    async create(dados){
        const postCriado = await postsRepository.create(dados);
        return postCriado;
    }
    async delete(id){
        const postDeletado = await postsRepository.delete(id);
        return postDeletado;
    }
    async updatePut(id,dados){
        const postAtualizado = await postsRepository.updatePut(id,dados);
        return postAtualizado;
    }
};
export const postsService = new PostsService();