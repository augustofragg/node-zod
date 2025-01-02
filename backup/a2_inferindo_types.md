```javascript
import z from 'zod';

const schema = z.object({
    name:z.string().min(2),
    email: z.string().email(),
    age: z.number().min(18).max(120),
    status: z.boolean(),
    characteristics: z.array(z.object({
        name:z.string(),
        value:z.number()
    }))
})

type User = z.infer<typeof schema>;

let person:User = {
    name:"jully",
    email: "jully@email.com",
    age:8,
    status:true,
    characteristics:[
        {name:"Mana",value:90},
        {name:"shield",value:100}]
}

console.log(typeof person)

let data = {
    name:"Augusto",
    email:"aufragg@hotmail.com",
    age:90
}

//const result = schema.parse(data);

const result = schema.safeParse(data);
console.log(result)


```