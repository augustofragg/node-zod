```javascript
import z from 'zod';

//zod: promises
const pattern = z.object({
    age:z.number()
});

const promisePattern = z.promise(pattern);

const apiResponse = Promise.resolve({
    age:90
})

const result = promisePattern.safeParse(apiResponse);
console.log(result.success);
```