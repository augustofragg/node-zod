```javascript
//zod tipos primitivos

//zod: tipos primitivos
import z from 'zod';
const tiposPrimitivos = z.object({
    name: z.string(),
    age: z.number(),
    active:z.boolean(),
    birthDate: z.date(),
    qualquer: z.any(),
    nunca: z.never()
});

//zod: tipos opcionais
const tiposOpcionais = z.object({
    name:z.string(),
    age:z.number().optional()
})

let teste = {
    name:"auguto",
    //age:27
}

const result = tiposOpcionais.parse(teste)
console.log(result)
```