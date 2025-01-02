import z from 'zod';

const pattern = z.object({
    name: z.string().transform(val => val.toUpperCase()),
    email: z.string().email().transform(val => val.split('@')[1]),
    age: z.number().default(() => Math.floor(Math.random() * 18)),
    descript: z.string().array()
});

const result = pattern.parse({
    name:'Augusto',
    email:'aufragg@hotmail.com',
    descript:["resilence","intelect"]
})

console.log(result);
