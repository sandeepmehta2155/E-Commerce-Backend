const mongoose = require('mongoose')
const express  = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const router=express.Router();

const app = express()
app.use(bodyParser.json())
app.use(cors())


const UserSchema = new mongoose.Schema({
fullname : String,
username : String,
email : String,
password : String,
})

const User = mongoose.model('User' , UserSchema)

router.route("/")
.get(async (req,res)=>{
  try{
    const users = await User.find({});
    res.json({success : true , users})
  }catch (err) {
      res.status(500).json({ success: false, message: "unable to get users", errorMessage: err.message })
    }

})
.post(async(req,res)=>{

    try{
     const user = req.body;
     
     let userExists = false, emailExists = false;
     
     User.find({}).exec((err,userDB)=>{

      userDB.map(obj =>{
  
       if(obj.username ===  user.username)
       userExists = true;

       if(obj.email === user.email)
       emailExists = true;
        
        })


        if(userExists === true)
        return res.json({success : false , message : "user Exists for given username"})

       if(emailExists === true)
          return res.json({success : false , message : "email Exists for given username"})

      if(!userExists && !emailExists){
                 const NewUser = new User(user);
                 const savedUser = NewUser.save();
        res.json({success : true , message : "user added in database"})
        }  
     });
   
  } catch(error){
    res.json({success : false , message : "Request can't be made"})
  }
  
})

module.exports = app;