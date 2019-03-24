const route= require("express").Router();

teams=[{name:'Chennai', rank:1},
          {name:'Rajasthan', rank:2},
        {name:'Banglore', rank:3}]
route.get("/",(req,res)=>res.send(teams))
route.get('/add',function(req,res,next){
teams.push({
    name:req.query.name,
    rank:req.query.rank
})
res.send(teams)
})

route.post('/add', function(req,res,next){
  teams.push({
    name:req.body.name,
    rank:req.body.rank,
  })
  res.send(teams)
})

route.patch("/patch/:id",(req, res)=>{
let id= req.params.id;
id--;
teams[id].name= req.body.name;
teams[id].rank= req.body.rank;
res.send(teams);

})
route.get('/:id',(req,res)=>res.send(teams[req.params.id]))
module.exports= route