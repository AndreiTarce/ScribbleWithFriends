import { Server as HttpServer } from "http";
import { Server, Socket, Server as SocketServer } from "socket.io";
import { IRoomController } from "../interfaces/IRoomController";
import { instrument } from "@socket.io/admin-ui";
import { socketConfig } from "../config/socketConfig";
import { error } from "console";
import { socketsManager } from "../listeners/socketsManager";

export class SocketAdapter {
    private io: SocketServer;
    private controller: IRoomController;

    constructor(server: HttpServer, controller: IRoomController) {
        this.io = new SocketServer(server, socketConfig);
        this.controller = controller;
    }

    init() {
        this.io.on("connection", (socket: Socket) => socketsManager(socket, this.controller));
    }

    registerInstrument() {
        instrument(this.io, {
            auth: false,
            mode: "development",
        });
    }
}
