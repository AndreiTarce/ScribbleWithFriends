import { Socket } from "socket.io";
import { RoomController } from "../controllers/roomController";
import { RoomInteractor } from "../interactors/roomInteractor";
import { RoomRepository } from "../repositories/roomRepository";

const onConnection = (socket: Socket) => {
    const roomRepository = new RoomRepository();
    const roomInteractor = new RoomInteractor(roomRepository);
    const roomController = new RoomController(roomInteractor, socket);

    socket.on("room:create", roomController.onCreateRoom.bind(roomController));
    socket.on("room:join", roomController.onJoinRoom.bind(roomController));
};

export { onConnection };
