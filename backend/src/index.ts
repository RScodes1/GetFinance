import express from 'express'
import cors from 'cors';
import { env } from './config/env';
import stockRouter from './routes/stock.route';

const app = express()
const PORT = env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) =>{
    res.status(200).json({ message : "The server is running"});
})
app.use("/api", stockRouter);


app.listen(PORT, ()=> {
   console.log(`server is running at http://localhost:${PORT}/health `);
})