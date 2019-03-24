const express= require('express');//we require exprress and call it as a funcn
const server= express();

server.use(express.json())
server.use(express.urlencoded({extended: true}))

const playerRoute= require('./routes/player');//routes are required from the
const teamRoute= require('./routes/team');    //respected files

server.use('/team',teamRoute)  //code to use routes
server.use('/player',playerRoute)


server.listen(3333);