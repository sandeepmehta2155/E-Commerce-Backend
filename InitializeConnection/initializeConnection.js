const mongoose = require('mongoose');

const uri = `${process.env['uri']}`;

const initializeConnection = () =>{

mongoose.connect(uri , {
  useNewUrlParser : true,
  useUnifiedTopology : true
})
}
console.log(mongoose.connection)

module.exports  = {initializeConnection}