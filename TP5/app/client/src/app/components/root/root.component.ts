import { Component } from "@angular/core";
import { SocketService } from "@services/socket.service";

@Component({
    selector: "app-root",
    templateUrl: "./root.component.html",
    styleUrls: [],
})
export class RootComponent {

    private socketService: SocketService;
    title = "INF3710 TP5";

    public constructor(socketService: SocketService) {
        this.socketService = socketService;
    }

}
