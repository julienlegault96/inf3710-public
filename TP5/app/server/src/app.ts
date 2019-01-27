import { injectable, inject } from "inversify";
import { Socket } from "./socket";

@injectable()
export class App {

    private foo: string;
    private socket: Socket;

    public constructor(
        @inject(Socket) socket: Socket
    ) {
        this.socket = socket;
        this.foo = "test";
    }

    public start(): void {
        this.socket.start();
        console.log(this.foo);
    }

}
