import { ServerOptions } from "socket.io";

export const socketConfig: Partial<ServerOptions> = {
    cors: {
        origin: ["https://admin.socket.io"],
        credentials: true,
    },
};
