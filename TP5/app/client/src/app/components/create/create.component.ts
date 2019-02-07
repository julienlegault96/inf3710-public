import { Component, OnInit } from "@angular/core";

import { AnimalService } from "@services/animal.service";

@Component({
    selector: "app-create",
    templateUrl: "./create.component.html",
    styleUrls: [],
})

export class CreateComponent {

    private animalService: AnimalService;

    public constructor(animalService: AnimalService) {
        this.animalService = animalService;
    }

}
