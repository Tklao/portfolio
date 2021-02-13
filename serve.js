const express = require("express");
const app = express();
const port = 5000;

app.use(express.static("public"));

app.get("/inicio", (req, res) => {
    res.sendFile(__dirname + "/public/html/index.html");
});

app.get("/sobre", (req, res) => {
    res.sendFile(__dirname + "/public/html/about.html");
});

app.listen(port, () => {
    console.log("Rodando na porta " + port);
});