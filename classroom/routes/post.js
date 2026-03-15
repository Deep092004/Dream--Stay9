const express = require('express');
const router = express.Router();
// post
router.get("/",(req,res)=>{
    res.send("post route works");    
});
//post
router.get("/:id",(req,res)=>{
   
    res.send("The id you have entered is ");
});
// post 
router.post("/",(req,res)=>{
    
    res.send("Post route works");
}); 
//post
router.delete("/users/:id",(req,res)=>{
    res.send("Delete route works");
});
module.exports = router;