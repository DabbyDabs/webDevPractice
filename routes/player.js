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
res.send(players)
})
route.post('/add', function( req,res,next){
  players.push({
    name: req.body.name,
    rank: req.body.rank
  })
  res.send(players)
})
route.delete('/delete/:id',(req,res) => {
let id= req.params.id;
id=id-1;
players[id]=null;
res.send(players);
})
route.get('/:id',(req,res)=>res.send(players[req.params.id]))//either id should be-
module.exports= route;//kept after the '/add' or to keep it before in code we must
//check for number by using parseInt and if not number then sent it to /add