```javascript
import z from 'zod';

//zod tipos validação de tipos string

const validString = z.object({
    name: z.string().toUpperCase(),
    email: z.string().email().toLowerCase(),
    description: z.string().trim()
});

//mais validações
const validStringPlus = z.object({
    name: z.string().email(),
    url: z.string().url(),
    emoji: z.string().emoji(),
    id: z.string().uuid(),
    //regra: z.string().regex(/[a-b]{2/g)
    //regra:z.string().length(2),
    //regra: z.string().includes('wp_'),
    //regra: z.string().startsWith('wp_'),
    //regra: z.string().endsWith('.jpg'),
    ip: z.string().ip()
})

let teste:object = {
    name:"augusto",
    email:"AUFRAGG@GMAIL.COM",
    description: " alguma coisa "
};

const result = validString.parse(teste);

console.log(result);
```