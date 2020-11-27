const socket_io = require("socket.io");
const io = socket_io();

let socketApi = {};

socketApi.io = io;

io.on("connection", function (socket) {
  socket.on("add highlight", function (data) {
    console.log("someone");
    console.log(data);
    const { id, title, count } = data;
    let newCount = count + 1;
    io.emit("receive", { id, title, newCount });
  });
});

module.exports = socketApi;
