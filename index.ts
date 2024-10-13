import express from "express";
import Routes from "./User/Route.ts";

const app = express();

app.use('/api', Routes);
app.listen(3000, ()=>{
    console.log("Server are running on http://localhost:3000");
})

export default app;