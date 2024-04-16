import express from "express";
import { Server, type Socket } from "socket.io";
import { createServer } from "http";
import cors from "cors";

const app = express();
app.use(cors());
const httpServer = createServer(app);

const io = new Server(httpServer);

io.on("connection", (socket: Socket) => {
    console.log("connection");
});

httpServer.listen(process.env.PORT || 3001);
