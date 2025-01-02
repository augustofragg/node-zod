import express from 'express';
import { jsonplaceholderResponse, userSchema} from './schema/schema';

const server = express();

server.use(express.json());
server.use(express.urlencoded({extended:true}));

server.get('/ping',(req,res) => {

    res.status(200).json({pong:true});
})

server.post('/inserir',(req,res) => {
    const result = userSchema.safeParse(req.body);

    if(!result.success) {
        res.json({error:'Dados inválidos'})
        return
    }

    const  {name , email, age } = req.body;

    //Processando
    console.log('Processando...');
    console.log(name , email, age);

    res.status(201).json({result:'tudo ok'})
});

server.get('/posts', async (req,res) => {

    const request = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await request.json();

    const result = jsonplaceholderResponse.safeParse(data);
    if(!result.success) {
        res.status(500).json({erro:'Ocorreu um erro interno'})
        return
    }

    let totalPosts = result.data.length

    res.json({total: totalPosts})
})

server.listen(3000,() => {

    console.log('Servidor rodando em http://localhost:3000');
})