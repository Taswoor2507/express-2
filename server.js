import app from "./app.js";
// GET pPORT FROM ENV VARIABLE
const port  =  process.env.PORT ||  3000 ;

// listen a server 
app.listen(port , (error)=>{
       if(error){
         console.log("Failed to lister a server ...")
         process.exit(1);
       }
    console.log(`Server is running on port ${port} ...`);
})