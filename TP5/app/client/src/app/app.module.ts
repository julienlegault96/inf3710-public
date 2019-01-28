import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";

import { AnimalService } from "@services/animal.service";

import { RootComponent } from "@components/root/root.component";
import { DashboardComponent } from "@components/dashboard/dashboard.component";

@NgModule({
    declarations: [
        RootComponent,
        DashboardComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
    ],
    providers: [
        AnimalService,
    ],
    bootstrap: [
        RootComponent,
    ],
})

// tslint:disable-next-line:no-unnecessary-class
export class AppModule { }
