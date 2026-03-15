const express = require('express');
const router = express.Router();

// Index-Users
router.get("/",(req,res)=>{
    res.send("get route works");    
});
//show-user
router.get("/:id",(req,res)=>{
   
    res.send("The id you have entered is ");
});
// post user
router.post("/",(req,res)=>{
    
    res.send("Post route works");
}); 
//detele user
router.delete("/:id",(req,res)=>{
    res.send("Delete route works");
});
module.exports = router;