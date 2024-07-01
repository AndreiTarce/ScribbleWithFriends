import { Socket } from "socket.io";
import { IRoomInteractor } from "../interfaces/IRoomInteractor";
import { IRoomController } from "../interfaces/IRoomController";
import { IJoinOrCreateRoomData } from "../interfaces/IRoom";
import { validateJoinOrCreateRoomData } from "../lib/validations/JoinOrCreateRoomData";
import * as z from "zod";
export class RoomController implements IRoomController {
    private interactor: IRoomInteractor;

    constructor(interactor: IRoomInteractor) {
        this.interactor = interactor;
    }

    async onCreateRoom(data: IJoinOrCreateRoomData) {
        const validatedData = validateJoinOrCreateRoomData(data);
        const { roomId, username } = validatedData;
        const response = await this.interactor.createRoom(roomId);
        return response;
    }

    onJoinRoom(data: IJoinOrCreateRoomData): Promise<string> {
        // return "not implemented yet";
        throw new Error("not implemented yet");
    }
    // async onJoinRoom(roomId: string) {
    //     try {
    //         await this.interactor.joinRoom(roomId);

    //         this.socket.join(roomId);
    //         this.socket.emit("room:joined", `joined room ${roomId}`);
    //         this.socket.to(roomId).emit("client:joined", "new client joined the room");
    //     } catch (error: unknown) {
    //         if (error instanceof Error) {
    //             this.socket.emit("room:joined", error.message);
    //         }
    //     }
    // }
}
