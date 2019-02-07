import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";

import { AnimalService } from "@services/animal.service";

import { RootComponent } from "@components/root/root.component";
import { DashboardComponent } from "@components/dashboard/dashboard.component";
import { NavigationComponent } from "@components/navigation/navigation.components";
import { TableComponent } from "@components/table/table.component";
import { CreateComponent } from "@components/create/create.component";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

@NgModule({
    declarations: [
        RootComponent,
        DashboardComponent,
        NavigationComponent,
        TableComponent,
        CreateComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FontAwesomeModule,
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
