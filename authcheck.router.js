const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()

const bodyParser = require('body-parser')
const cors = require('cors')

router.use(bodyParser.json())
router.use(cors())

const uri = `${process.env['uri']}`;


mongoose.connect(uri , {
  useNewUrlParser : true,
  useUnifiedTopology : true
})


const User = mongoose.model('User')


router.post("/" , async (req,res)=>{

    try{
     const user = req.body;
     
     let userExists = false;
     let userauth = false;
     
     User.find({}).exec((err,userDB)=>{

      userDB.map(obj =>{
        
            if(obj.username ===  user.username)
            userExists = true;
            if(obj.password === user.password)
            userauth = true;
              
              })

              if(userExists && userauth)
              return res.json({success : true , message :"user auth successful"})
              else if(!userExists )
               return res.json({success : true , message :"user not found"})
              else if(userExists && !userauth )
               return res.json({success : true , message :"wrong password"})
              else 
              return res.json({success : true , message : "user doesn't exists for given username"})
              
          });
   
  } catch(error){
    res.json({success : false , message : "Req can't be made"})
  }
 
 
})

module.exports = router;