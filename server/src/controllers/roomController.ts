import { Socket } from "socket.io";
import { IRoomInteractor } from "../interfaces/IRoomInteractor";

export class RoomController {
    private interactor: IRoomInteractor;
    private socket: Socket;

    constructor(interactor: IRoomInteractor, socket: Socket) {
        this.interactor = interactor;
        this.socket = socket;
    }

    async onCreateRoom(roomId: string) {
        try {
            await this.interactor.createRoom(roomId);

            this.socket.join(roomId);
            this.socket.emit("room:created", `room with code ${roomId} created`);
        } catch (error: unknown) {
            if (error instanceof Error) {
                this.socket.emit("room:create", error.message);
            }
        }
    }

    async onJoinRoom(roomId: string) {
        try {
            await this.interactor.joinRoom(roomId);

            this.socket.join(roomId);
            this.socket.emit("room:joined", `joined room ${roomId}`);
            this.socket.to(roomId).emit("client:joined", "new client joined the room");
        } catch (error: unknown) {
            if (error instanceof Error) {
                this.socket.emit("room:joined", error.message);
            }
        }
    }
}
