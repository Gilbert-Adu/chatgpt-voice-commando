const express = require("express");
const app = express();

require('dotenv').config();

const path = require("path");
const { speechToText } = require("./try");


app.use(express.static('client'));
app.post("/upload", async (req, res) => {

   
});

app.get("/", (req, res) => {

    res.sendFile(path.join(__dirname, "../client/index.html"));
});

app.get("/:recordName", async (req, res) => {

    try {
        const fileName = req.params.recordName;
        console.log("fileName: ", fileName);
        setTimeout((() => {
            console.log(speechToText(fileName));
            res.status(200).send(speechToText(fileName));
        }), 5000);
        

    }catch(err) {
        console.log(err.message);
        res.status(400).send({"message": err.message});
    }

});


//had to update npm
//app.get("/submit", (req, res) => {});

app.listen(process.env.PORT || 4000, () => {

    console.log("listening on 4000");
});