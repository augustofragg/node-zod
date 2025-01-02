import z from 'zod';

export const userSchema = z.object({
        name:z.string().min(2),
        email:z.string().email(),
        age: z.number().min(18).max(120)
})


export const jsonplaceholderResponse= z.array(z.object({
     userId: z.number(),
     id: z.number(),
     title: z.string(),
     body: z.string()
}));


