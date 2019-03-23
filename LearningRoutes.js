const server= require('express')();

const playerRoute= require('./routes/player');
const teamRoute= require('./routes/team');

server.use('/team',teamRoute)
server.use('/player',playerRoute)

server.listen(2222);