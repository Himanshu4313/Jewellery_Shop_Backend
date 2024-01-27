import  express  from "express";
import cors from 'cors';
import morgan from "morgan";
import cookieParser from 'cookie-parser';

import authRouter from './src/routes/auth.routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use(cors({
    origin: process.env.FRONTEND_URL,
    Credential:true
}))

app.use(morgan('dev'));

app.use(cookieParser());

//All routes 
app.use('/api/v1/auth',authRouter); // for user authentication



app.get('/',( req, res ) =>{
     res.status(200).json({message:'Welcome to Beauty Jewellers'}) ; 
});

app.use('*' , (req , res) =>{
     res.send('<h2>404 Page Not Found!!!</h2>');
});


export default app;