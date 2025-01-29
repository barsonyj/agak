import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("<h1>Ágak v1.0.0</h1>"))

app.listen(88, (error) => {
    if (error) console.log(error); else console.log("Server on port 88");
});