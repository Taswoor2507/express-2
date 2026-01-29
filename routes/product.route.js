import { Router } from "express";
export const productRouter = Router();

productRouter.get("/all" , (req,res,next)=>{
    res.json({message:"Get all products api hit "})
})