import { knex } from "../database/knex.js";

class PostsRepository{
    async getAll(){
        const res = knex("posts").select("*");
        return res.rows;
    }
    async getById(id){
        const res = knex("posts").select("*").where({id});
        return res.rows;
    }
    async create(dados){
        const [res] = await knex("posts").insert({dados}).returning("*");
        return res.rows;
    }
    async delete(id){
        const [res] = await knex("posts").where({id}).del("*").returning("*");
        return res.rows;
    }
    async updatePut(id, dados){
        const [res] = await knex("posts").where({id}).update({dados}).returning("*");
        return res.rows;
    }
};
export const postsRepository = new PostsRepository();