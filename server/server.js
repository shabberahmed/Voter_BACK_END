import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import conn from './database/conn.js';
import route from './routes/AuthRouter.js';
const PORT=1001
const app=express()

app.use(express.json())
conn()
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(route)
app.listen(PORT,()=>console.log(`server started on port number ${PORT}`))
