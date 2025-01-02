```javascript
import z from 'zod';

const schema = z.object({
    name:z.string().min(2),
    email: z.string().email(),
    age: z.number().min(18).max(120)
})

let data = {
    name:"Augusto",
    email:"aufragg@hotmail.com",
    age:90
}

//const result = schema.parse(data);

const result = schema.safeParse(data);

console.log(result)
console.log(result.data)

```
