import { Router } from "express";
export const userRouter = Router();

// user routes 

//get all users

userRouter.get("/" , (req,res,next)=>{
    res.json({message:"Get all users api hit "})
})


//add user 
userRouter.get("/add" ,  (req,res,next)=>{
    res.json({message:"User add succesfully"})
})
// update user 
// delete user 



//  router  = Router()  -->  return  {}

//  router.get("/" , fn)  =>   {"/" , "/add" , "/update" , }


