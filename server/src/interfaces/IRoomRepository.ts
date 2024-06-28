export interface IRoomRepository {
    create(id: string): void;
    join(id: string): void;
    leave(): void;
}
