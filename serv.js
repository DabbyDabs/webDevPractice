const express = require("express");
const serv= express();
serv.get('/greet/:name',function(req,res,next){
    let greeting="Goodmorning "+req.params.name+ "this is a great "+ req.query.middlename;
res.send(greeting);
})
serv.listen(4321);