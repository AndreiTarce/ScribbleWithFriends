import { Socket } from "socket.io";
import { IJoinOrCreateRoomData } from "./IRoom";

export interface IRoomController {
    onCreateRoom(data: any[], socket: Socket): Promise<string>;
    onJoinRoom(data: IJoinOrCreateRoomData): Promise<string>;
}
