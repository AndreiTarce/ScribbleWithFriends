export interface IRoomInteractor {
    createRoom(id: string): string;
    joinRoom(id: string);
    leaveRoom();
}
