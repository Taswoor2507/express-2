import express from 'express';
import dotenv from 'dotenv';
import {userRouter} from "./routes/user.route.js";
import {productRouter} from "./routes/product.route.js";
// configure dotenv 
dotenv.config();
// initilize app
const app= express();



// initilize user routes
// app.use()
//     "/""
//   localhost:8080/  X 
// localhost:8080/api/v1/users/  V
// global middlewares 
app.use("/api/v1/users" ,  userRouter)
app.use("/api/v1/products" , productRouter);


export default app;