import * as SocketIO from "socket.io-client";
import { SocketEvents } from "@common/socket/socket-events";
import { SocketArgs } from "@common/socket/socket-args";
import { ServerHost } from "@common/hosts/server-host";

export class SocketService {

    private readonly socketIO: SocketIOClient.Socket;

    public constructor() {
        this.socketIO = SocketIO(ServerHost.address);
    }

    public emit(event: SocketEvents, args?: SocketArgs): void {
        this.socketIO.emit(event, args);
    }

    public addListener(event: SocketEvents, externalFunction: Function): void {
        this.socketIO.on(event, externalFunction);
    }

    public removeListener(event: SocketEvents, externalFunction: Function): void {
        this.socketIO.removeListener(event, externalFunction);
    }

    public addOneTimeListener(event: SocketEvents, externalHandler: (args?: SocketArgs) => void): void {
        const callback = (args: SocketArgs) => {
            externalHandler(args);
            this.removeListener(event, callback);
        };

        this.addListener(event, callback);
    }

}
