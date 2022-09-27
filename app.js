const express = require("express");
const path = require("path");

const app = express();

app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')));

app.get("/test", (req, res) =>{
    res.send("welcome")
})

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`app listening on port ${port}`));