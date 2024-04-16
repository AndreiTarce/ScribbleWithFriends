import { io } from "socket.io-client";

const SERVER: string = process.env.NODE_ENV === "production" ? "productionurl" : "http://localhost:3001";

export const socket = io(SERVER, { transports: ["websocket"] });
