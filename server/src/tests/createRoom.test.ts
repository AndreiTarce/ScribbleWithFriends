import { Socket, io } from "socket.io-client";
import { RoomRepository } from "../repositories/roomRepository";
import { RoomInteractor } from "../interactors/roomInteractor";
import { RoomController } from "../controllers/roomController";
import { IJoinOrCreateRoomData } from "../interfaces/IRoom";
import { randomUUID } from "crypto";

describe("socket room operations", () => {
    const roomRepository = new RoomRepository();
    const roomInteractor = new RoomInteractor(roomRepository);
    const roomController = new RoomController(roomInteractor);

    it("room:create with valid data", async () => {
        const randomId = randomUUID();
        const roomData: IJoinOrCreateRoomData = { username: "John Doe", roomId: randomId };

        const response = await roomController.onCreateRoom(roomData);

        expect(response).toBe(randomId);
    });

    it("room:create with invalid data", async () => {
        const roomData = { username: "test name", roomId: "too short room id" };

        expect(async () => {
            await roomController.onCreateRoom(roomData);
        }).rejects.toThrow();
    });
});
