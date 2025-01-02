```javascript
import z from 'zod';

// zod:mensagens de erro

const pattern = z.object({
    email: z.string().email('E-mail inválido'),
    age:z.number({ 
            required_error:'Idade é Obrigatória',
            invalid_type_error:'Idade Precisa de um número'
    })
    .gte(18,'Precisa ser maior que 18')
});

let teste:object = {   
    email:"teste@teste.com", 
    age:27
};

const result = pattern.parse(teste);

console.log(result);
```