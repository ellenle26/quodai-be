const socket_io = require("socket.io");
const io = socket_io();

let socketApi = {};

socketApi.io = io;

io.on("connection", function (socket) {
  socket.on("add highlight", function (data) {
    console.log("alolo");
    console.log(data);
    io.emit("receive", data);
  });
});

module.exports = socketApi;
