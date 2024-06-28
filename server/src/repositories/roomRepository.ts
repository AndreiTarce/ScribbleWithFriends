import { IRoomRepository } from "../interfaces/IRoomRepository";

export class RoomRepository implements IRoomRepository {
    create(id: string): string {
        // throw new Error("Error thrown in room repository");
        return "room code";
    }

    join(id: string): void {
        throw new Error("repository join not implemented");
    }

    leave(): void {
        throw new Error("repository leave not implemented");
    }
}
