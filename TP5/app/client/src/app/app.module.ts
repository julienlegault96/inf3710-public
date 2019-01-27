import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { RootComponent } from "@components/root/root.component";

@NgModule({
    declarations: [
        RootComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [
        RootComponent,
    ],
})

// tslint:disable-next-line:no-unnecessary-class
export class AppModule { }
