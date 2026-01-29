import express from 'express';
import dotenv from 'dotenv';
import {userRouter} from "./routes/user.route.js";
import cors from 'cors';
import {productRouter} from "./routes/product.route.js";
// configure dotenv 
dotenv.config();
// initilize app
const app= express();
// setup cors 
//  app.use(cors({
//     origin:"*"
//  }))

const allowedOrigin = ["http://localhost:5173"]
const readOnlyOrigins = ["*"]

// setup cors options object 

const corsOptions = {
    origin: function(origin , cb){
        console.log("Origin:" , origin);
       if(!origin){
        return cb(null , {
            origin:true
        })
       }

        if(allowedOrigin.includes(origin)){
            cb(null ,  {
                origin:true,
                methods:["GET" , "POST" , "PUT" , "DELETE"]
            })
        }else if(readOnlyOrigins.includes(origin)){
            cb(null , {
                origin:true,
                methods:["GET"]
            })
        }
    }
}


// implement cors middleware 
app.use(cors(corsOptions)); // thirdparty middleware 







// initilize user routes
// app.use()
//     "/""
//   localhost:8080/  X 
// localhost:8080/api/v1/users/  V
// global middlewares 
app.use("/api/v1/users" ,  userRouter)
app.use("/api/v1/products" , productRouter);


export default app;