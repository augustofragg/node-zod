```javascript
import z from 'zod';

// zod tipos validação de tipos number

// Greater Than = GT
// Lower Than = LT
// Greather Than or Equal = gte
// Lower Than or Equal = LTE

const validNumber = z.object({
    // age: z.number().gte(18)
    // age: z.number().gt(18)
    // age: z.number().gt(18)
    // age: z.number().positive()
    // age: z.number().negative()
    // age: z.number().nonnegative()
    // age: z.number().nonpositive()
    // age: z.number().multipleOf(5)
});

let teste:object = {
    age:27
};

const result = validNumber.parse(teste);

console.log(result);
```