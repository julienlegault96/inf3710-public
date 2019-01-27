import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { RootComponent } from "@components/root/root.component";
import { SocketService } from "@services/socket.service";

@NgModule({
    declarations: [
        RootComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
    ],
    providers: [
        SocketService,
    ],
    bootstrap: [
        RootComponent,
    ],
})

// tslint:disable-next-line:no-unnecessary-class
export class AppModule { }
