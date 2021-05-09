const express = require('express');
const bodyParser = require('body-parser');

const{ initializeConnection} = require("./InitializeConnection/initializeConnection")
const bookbatches = require("./Bookbatches/bookbatches.router.js");
const featured = require("./Bookbatches/featured.router.js");
const userdata = require("./Login/login.router.js");
const userauth = require("./Authcheck/authcheck.router.js");
var cors = require('cors');


initializeConnection()

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


app.listen(process.env['PORT'], () => {
  console.log('server started');
});