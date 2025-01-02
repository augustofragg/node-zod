```javascript
import z from 'zod';

// zod: interceção entre dos esquemas

// zod: união permite que um dados receba mais de tipo de validação

const person = z.object({
    name: z.string(),
    // age: z.number().or(z.string())
    age: z.union([z.number(),z.string()])
})

const employee = z.object({
    role: z.string().or(z.number())
})

//Interceção une as validações de dois esquemas
// const personEmployee = z.intersection(person,employee);
const personEmployee = person.and(employee) 

let user:object = {
    name:"Augusto",
    age:"27",
    role:1
}

const result = personEmployee.parse(user);
console.log(result);
```