const express = require('express');
const bodyParser = require('body-parser');

const bookbatches = require("./bookbatches.router.js");
const featured = require("./featured.router.js");
const userdata = require("./login.router.js");
const userauth = require("./authcheck.router.js");
var cors = require('cors');
const PORT= 3000;

const app = express();

app.use(bodyParser.json())

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.use("/bookbatches", bookbatches)
app.use("/featured", featured)
app.use("/login" , userdata)
app.use("/userauth", userauth)


app.listen(PORT, () => {
  console.log('server started');
});