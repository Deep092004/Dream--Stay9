const express=require("express");
const app=express();
const users=require("./routes/user.js");
const posts=require("./routes/post.js");
const session = require('express-session');
const flash = require('connect-flash');
const path = require("path"); 
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
const secretoptions= {
    secret: 'thisisasecretkey',
resave:false,
saveUninitialized:true,};
app.use(session(secretoptions));
app.use(flash());
app.use((req, res, next) => {
    
    res.locals.errmessages=req.flash("error");
    res.locals.sucmessages=req.flash("success");
    next();
});

app.get("/register",(req,res)=>{
    let{name="anonymous"}=req.query;
    if(name=="anonymous"){
        req.flash("error","user not registered ");
    }else
    {
        req.flash("success","User registered successfully");
    }
    req.session.name=name;
   
    res.redirect("/hello");
});
app.get("/hello",(req,res)=>{

  res.render("page.ejs",{name:req.session.name});
});


app.get("/test",(req,res)=>{
    res.send("Test route works");
});
app.use("/users",users);
app.use("/posts",posts);
app.get("/",(req,res)=>{
    res.send("Working the route");
});

app.get("/getcookie", (req, res) => {
    res.cookie("greet","hello");
    res.send('Cookie set');
});




app.listen(3000,()=>{
    console.log("server is running on port 3000");
}); 