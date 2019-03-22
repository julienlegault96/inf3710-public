import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

import { AnimalService } from "@services/animal.service";
import { TreatmentsService } from "@services/treatments.service";

import { RootComponent } from "@components/root/root.component";
import { DashboardComponent } from "@components/dashboard/dashboard.component";
import { NavigationComponent } from "@components/navigation/navigation.components";
import { TableComponent } from "@components/table/table.component";
import { CreateComponent } from "@components/create/create.component";
import { DetailsComponent } from "@components/details/details.component";
import { EditComponent } from "@components/edit/edit.component";
import { TreatmentsComponent } from "@components/treatments/treatments.component";
import { CliniqueService } from "@services/clinique.service";
import { ProprietaireService } from "@services/proprietaire.service";

@NgModule({
    declarations: [
        RootComponent,
        DashboardComponent,
        NavigationComponent,
        TableComponent,
        CreateComponent,
        DetailsComponent,
        EditComponent,
        TreatmentsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FontAwesomeModule,
        FormsModule,
    ],
    providers: [
        AnimalService,
        CliniqueService,
        TreatmentsService,
        ProprietaireService,
    ],
    bootstrap: [
        RootComponent,
    ],
})

// tslint:disable-next-line:no-unnecessary-class
export class AppModule { }
