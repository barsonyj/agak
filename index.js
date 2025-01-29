import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

let adatok = [
    { id:1, nev:"porszívó", szin:"piros" },
    { id:2, nev:"hajszárító", szin:"zöld" },
    { id:3, nev:"falióra", szin:"fehér" }
]
let nextId = 4;

app.get("/", (req, res) => res.send("<h1>Ágak v1.0.0</h1>"))
app.get("/adatok", (req, res) => res.send(adatok));

app.listen(88, (error) => {
    if (error) console.log(error); else console.log("Server on port 88");
});