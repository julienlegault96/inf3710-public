import { Component, Input } from "@angular/core";

import { Animal } from "@common/entities/animal";
import { AnimalService } from "@services/animal.service";

@Component({
    selector: "app-details",
    templateUrl: "./details.component.html",
    styleUrls: [],
})

export class DetailsComponent {

    @Input() public animal: Animal;
    private readonly animalService: AnimalService;

    public constructor(animalService: AnimalService) {
        this.animalService = animalService;
    }

    public deleteAnimal(): void {
        this.animalService.deleteAnimal(this.animal)
            .subscribe();
    }

}
