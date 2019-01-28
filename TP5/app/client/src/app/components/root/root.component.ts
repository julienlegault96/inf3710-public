import { Component, OnInit } from "@angular/core";
import { SocketService } from "@services/socket.service";
import { SocketEvents } from "@common/socket/socket-events";

@Component({
    selector: "app-root",
    templateUrl: "./root.component.html",
    styleUrls: [],
})
export class RootComponent implements OnInit {

    private socketService: SocketService;
    title = "INF3710 TP5";

    public constructor(socketService: SocketService) {
        this.socketService = socketService;
        this.socketService.emit(SocketEvents.Ping);
    }

    public ngOnInit(): void {
        this.socketService.addListener(SocketEvents.Pong, () => {
            console.log("Received Pong");
            this.title = "AAA";
        });
    }

}
