import { Socket } from "socket.io";
import { RoomController } from "../controllers/roomController";
import { RoomInteractor } from "../interactors/roomInteractor";
import { RoomRepository } from "../repositories/roomRepository";
import { IRoomController } from "../interfaces/IRoomController";
import { IJoinOrCreateRoomData } from "../interfaces/IRoom";

const socketsManager = (socket: Socket, controller: IRoomController) => {
    // socket.on("room:create", async (data: IJoinOrCreateRoomData) => {
    //     try {
    //         const id = await controller.onCreateRoom(data);
    //         // socket.join(roomId);
    //         // socket.emit("room:joined", roomId);
    //     } catch (error: unknown) {
    //         if (error instanceof Error) {
    //             console.log(error);
    //             socket.emit("error", error);
    //         }
    //     }
    // });

    socket.on("room:create", (data) => controller.onCreateRoom(data, socket));

    socket.on("room:join", async (data: IJoinOrCreateRoomData) => {
        try {
            const id = await controller.onJoinRoom(data);
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    });
};

export { socketsManager };
