import express from "express";
import { Server, Socket } from "socket.io";
import { createServer } from "http";
import cors from "cors";

const app = express();
app.use(cors());
const httpServer = createServer(app);

const io = new Server(httpServer);

io.on("connection", (socket: Socket) => {
    console.log("connection");
    socket.on("test", (value: Date) => {
        socket.send(`received this on the server: ${value}`);
    });
});

httpServer.listen(process.env.PORT || 3001);
