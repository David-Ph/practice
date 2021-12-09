// import dependencies
import express from 'express';
import * as dotenv from "dotenv";

// initialize
dotenv.config();
const app = express();

// express setting
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// set routes

app.get('/api/v1/healthcheck', (req: express.Request, res: express.Response) => {
    res.json({info: "Health check okay!"});
})



// https://medium.com/@agentwhs/complete-guide-for-typescript-for-mongoose-for-node-js-8cc0a7e470c1





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));