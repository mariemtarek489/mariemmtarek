import express, {Request,Response} from "express";
import path from "path";

import carRouter from "./src/routes/carRouters";
import userRouter from "./src/routes/userRouters";
import interestRouter from "./src/routes/interestRouters";


const app = express();
const port = 5000;
const host = "localhost";


app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 



app.use("/cars", carRouter);
app.use("/users", userRouter);
app.use("/interests", interestRouter);

app.get('/', (req, res) => {
    res.send('Welcome to Our Car Store'); 
    });  

app.listen(port , ()=>{
    console.log(`Server is running at http://localhost:${port}`); 
})
