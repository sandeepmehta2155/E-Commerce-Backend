const mongoose = require('mongoose');

const uri = `${process.env['uri']}`;

const initializeConnection = () =>{

 mongoose.connect(uri , {
  useNewUrlParser : true,
  useUnifiedTopology : true
})

 const client = mongoose.connection;

 client.on('error', () => console.log('connection error'))

client.once('open', () => console.log('server connected'))

}


module.exports  = {initializeConnection}