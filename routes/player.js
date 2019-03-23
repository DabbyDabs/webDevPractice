const route= require("express").Router();

players=[{name:'Virat', rank:1},
          {name:'Rohit', rank:2},
        {name:'Bumrah', rank:3}]
route.get("/",(req,res)=>res.send(players))
route.get('/add',function(req,res,next){
players.push({
    name:req.query.name,
    rank:req.query.rank
})
console.log("i was visited")
res.send(players)
})
route.get('/:id',(req,res)=>res.send(players[req.params.id]))
module.exports= route;