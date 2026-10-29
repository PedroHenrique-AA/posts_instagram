import { Router } from "express";
import { postsController } from "../controllers/post.controller.js";

export const postRouter = Router();

postRouter.get("/", postsController.getAll);
postRouter.get("/:id", postsController.getById);
postRouter.post("/", postsController.create);
postRouter.delete("/:id", postsController.delete);
postRouter.put("/:id", postsController.updatePut);