import * as z from "zod";
import { IJoinOrCreateRoomData } from "../../interfaces/IRoom";

const joinOrCreateRoomSchema = z.object({
    username: z
        .string()
        .min(4, "Username must contain at least 4 characters")
        .max(20, "Username must not contain more than 20 characters"),
    roomId: z.string().length(36, "Room ID must contain exactly 21 characters"),
});

export const validateJoinOrCreateRoomData = (data: IJoinOrCreateRoomData) => {
    return joinOrCreateRoomSchema.parse(data);
};
