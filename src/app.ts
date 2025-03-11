import express, { Express } from 'express';

const app: Express = express();

/* Used to parse incoming request bodies */
app.use(express.json());

export default app;
