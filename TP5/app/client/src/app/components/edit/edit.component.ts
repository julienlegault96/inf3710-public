import { Component, Input } from "@angular/core";
import * as moment from "moment";

import { Animal } from "@common/entities/animal";
import { AnimalService } from "@services/animal.service";

@Component({
    selector: "app-edit",
    templateUrl: "./edit.component.html",
    styleUrls: [],
})

export class EditComponent {

    @Input() public animal: Animal;
    private animalService: AnimalService;

    public constructor(animalService: AnimalService) {
        this.animalService = animalService;
    }

    public formatDate(date: string): string {
        moment.locale("fr");

        return moment(date).format("YYYY-MM-DD");
    }

}
