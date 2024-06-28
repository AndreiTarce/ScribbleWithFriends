import express from "express";
import { createServer } from "http";
import cors from "cors";
import { onConnection } from "./listeners/socketsManager";
import { SocketAdapter } from "./adapters/SocketAdapter";
import { Server } from "socket.io";

const app = express();
app.use(cors());
const httpServer = createServer(app);

// const io = new SocketAdapter(httpServer);
const io = new Server(httpServer);

io.on("connection", onConnection);

httpServer.listen(process.env.PORT || 3001);
