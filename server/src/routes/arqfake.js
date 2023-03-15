import express from 'express';
import cors from 'cors';

const app = express();

//configuração expres

app.use(expres.json())

//cors

app.use(cors({credentials:true, origin: 'http://localhost:3000'}))

//public folder imagem

app.use(expres.static('public'))

//Routes

app.listen(5000)

