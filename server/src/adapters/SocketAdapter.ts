import { Server as HttpServer } from "http";
import { Socket, Server as SocketServer } from "socket.io";

export class SocketAdapter {
    private io: SocketServer;

    constructor(server: HttpServer) {
        this.io = new SocketServer(server);
    }

    on(ev: string, listener: (socket: Socket) => void) {
        this.io.on(ev, listener);
    }
}
