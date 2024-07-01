import { IJoinOrCreateRoomData } from "./IRoom";

export interface IRoomController {
    onCreateRoom(data: IJoinOrCreateRoomData): Promise<string>;
    onJoinRoom(data: IJoinOrCreateRoomData): Promise<string>;
}
