```javascript
import z from 'zod';

// zod:enum

const pattern = z.object({
    fuel: z.enum(["GASOLINA","DIESEL","ALCOOL"])
})

let teste:object = {   
    fuel: "GASOLIA"
};

const result = pattern.parse(teste);

console.log(result);
```