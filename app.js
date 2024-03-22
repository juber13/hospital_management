
import express from 'express';
import { config } from "dotenv";
import { dbConnection } from './db/dbConnection.js'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import messageRouter from './routes/messageRoute.js'
import userRouter from  './routes/userRoute.js'
import fileUpload from 'express-fileupload';


const app = express();
config({ path: './config/.env' });

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

dbConnection();

app.use(cors({
    origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
    method: ["POST", "GET", "DELETE", "PUT"],
    credentials: true
}))

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp"
}))


app.use('/api/v1/message', messageRouter);
app.use('/api/v1/user' , userRouter)


export default app