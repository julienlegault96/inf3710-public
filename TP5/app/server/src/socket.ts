import * as SocketIO from "socket.io";
import { injectable } from "inversify";
import { SocketEvents } from "../../common/socket/socket-events";
import { ServerHost } from "../../common/hosts/server-host";

@injectable()
export class Socket {

    private readonly socketIO: SocketIO.Server;

    public constructor() {
        this.socketIO = SocketIO();
        this.defineEvents();
    }

    public start(): void {
        this.socketIO.listen(ServerHost.port);
    }

    private defineEvents(): void {
        this.socketIO.on(SocketEvents.Connection, (socket: SocketIO.Socket) => {

            // tslint:disable-next-line:no-console
            console.log("User connected");

            socket.on(SocketEvents.Ping, () => {
                // TODO start cryptassist
                setTimeout(() => {
                    socket.emit(SocketEvents.Ping);
                }, 1000);
            });

            socket.on(SocketEvents.Disconnect, () => {
                // tslint:disable-next-line:no-console
                console.log("User disconnected");
            });

        });
    }

}
