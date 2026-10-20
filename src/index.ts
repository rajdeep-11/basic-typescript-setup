import express, { type Request, type Response, type NextFunction } from 'express';
import { serverConfig } from './config';
import { customMiddleware } from './middlewares/custom-middleware';
import v1Router from './routes/v1/index-router';
import v2Router from './routes/v2/index-router';

import z from 'zod';

const app = express();

//express - js parsing middleware: 
app.use(express.json()); // to get JSON data from req.body:
app.use(express.text()) //for get text from req.body:

//custom middleware:
app.use(customMiddleware);

app.use('/api/v1', v1Router);
app.use('/api/v2', v2Router)

app.listen(serverConfig.PORT, () => {
    console.log(`Server running at port ${serverConfig.PORT}`);
});

const UserObj = {
    name : "hello",
    age: 25
}

const objectSchema = z.object({
    name: z.string(),
    age: z.number().int().positive()
});

//validate the object using ZOD:
const validation = objectSchema.parse(UserObj);
console.log(validation);

//npx ts-node src/index.ts (not working)

// install ---> `npm install -D tsx`
// run ---> `npx tsx src/index.ts`

//To generate the js file from ts file ---> `npx tsc`
//To run the js file ---> `node dist/index.js`

//install ---> `npm install -D concurrently`
//run both at once ---> `npx concurrently "npx tsc --watch" "node --watch dist/index.js"`
