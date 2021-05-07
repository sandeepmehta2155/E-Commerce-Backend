const express = require('express');
const router = express.Router();

const products = [{id:1 , name: "kala chasma , price: 1300"}]

const images = [
  "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Books/092020/Children-Book-Shelf_PC.jpg",
 "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Books/102020/Examcentral/Exam-Central-PC.jpg", 
 "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Books/032020/editors-corner-PC-final.jpg",     
 "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Books/112020/Offerzone-pc.jpg",
 "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Books/112020/HIGHER-EDUCATION.jpg",  
 "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Books/112020/SCHOOL.jpg"
]

router.get("/", (req,res)=>{
  res.json({success : true, images})
})

module.exports = router;
