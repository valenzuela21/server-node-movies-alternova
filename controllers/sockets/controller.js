const socketController = (socket) => {
    console.log("Client Socket Success Fully", socket.id);
    socket.on("disconnect", () =>{
        console.log("Client Socket disconnect");
    })
    //socket.broadcast.emit("send-movie-first", "This proof of the emit IO")
}

module.exports = {
    socketController
}