const express = require("express");
const app = express();
var server = app.listen(3000);
// const cors = require('cors');



// app.use(cors());
// app.use(function (req, res, next) {

//     res.setHeader('Access-Control-Allow-Origin', '*');
//     next();
// });

// var PORT = process.env.PORT || 3000;
// const server = app.listen(PORT);

// const server = app.listen(3000, () => {
//   console.log("My socket server is running");
// })

// const io = require('socket.io')(server);

// function listen() {
//   const host = server.address().address;
//   const port = server.address().port;
//   console.log('Example app listening at http://' + host + ':' + port);
// }

app.use(express.static('public'));



// io.sockets.on('connection', newConnection);

// function newConnection(socket){
// 	console.log('new connection: ' + socket.id);

// }