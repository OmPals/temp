const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.use(cors());

const next = (err) => {console.log(err)}

app.get("/", (req, res) => {
    console.log(req);
    res.send("Don't even try that!");
})

app.get('/api/whoami', (req, res) => {
    res.json(req.headers);
    console.log("Request who am I from " + JSON.stringify(req.headers));
})


app.listen(4000, console.log("4000"));