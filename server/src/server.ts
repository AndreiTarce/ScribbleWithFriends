import express from "express";
import { createServer } from "http";
import cors from "cors";
import { SocketAdapter } from "./adapters/SocketAdapter";
import { Server } from "socket.io";
import { socketConfig } from "./config/socketConfig";
import { instrument } from "@socket.io/admin-ui";
import { RoomRepository } from "./repositories/roomRepository";
import { RoomInteractor } from "./interactors/roomInteractor";
import { RoomController } from "./controllers/roomController";

const app = express();
app.use(cors());
export const httpServer = createServer(app);

const roomRepository = new RoomRepository();
const roomInteractor = new RoomInteractor(roomRepository);
const roomController = new RoomController(roomInteractor);

const io = new SocketAdapter(httpServer, roomController);

io.init();
io.registerInstrument();

httpServer.listen(process.env.PORT || 3001);
