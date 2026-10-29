import express from "express";
import { postRouter } from "./routes/posts.route.js";

const port = 3000;
const app = express();

app.use(express.json());
app.use("/post", postRouter);

app.listen(port, ()=>{
    console.log(`API rodando em: http://localhost:${port}`);
});