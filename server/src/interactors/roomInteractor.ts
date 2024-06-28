import { Socket } from "socket.io";
import { IRoomInteractor } from "../interfaces/IRoomInteractor";
import { IRoomRepository } from "../interfaces/IRoomRepository";

export class RoomInteractor implements IRoomInteractor {
    private repository: IRoomRepository;

    constructor(repository: IRoomRepository) {
        this.repository = repository;
    }

    createRoom(id: string) {
        this.repository.create(id);
        return id;
    }

    joinRoom(roomId: string) {
        throw new Error("Not implemented yet");
    }

    leaveRoom() {
        // throw new Error("Not implemented yet");
    }
}
