import express from 'express';
import z from 'zod';

const server = express();

server.use(express.json());
server.use(express.urlencoded({extended:true}));

server.get('/ping',(req,res) => {

    res.status(200).json({pong:true});
})

server.post('/inserir',(req,res) => {
    const requestSchema = z.object({
        id: z.number(),
        name: z.string().min(2),
        age: z.number()
    })

    const result = requestSchema.safeParse(req.body);

    if(!result.success) {
        res.status(400).json({error:'Corpo da requisição incorreto'})
        return
    }

    const  { id , name, age } = req.body;

    console.log('teste');
    console.log(id, name, age);

    res.json({response:'ok'})
});

server.listen(3000,() => {

    console.log('Servidor rodando em http://localhost:3000');
})