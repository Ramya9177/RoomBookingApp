import { Room } from "./Room";
import { User } from "./User";

export class Booking {
    static id: number;
    static room: Room;
    static user: User;
    static purpose: string;
    static participants: number;
}