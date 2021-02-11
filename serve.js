const express = require("express");
const app = express();
const port = 5000;

app.use(express.static("public"));

app.use("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
    console.log("Rodando na porta " + port);
});