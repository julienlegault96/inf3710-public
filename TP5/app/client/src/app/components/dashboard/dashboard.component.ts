import { Component, OnInit } from "@angular/core";

import { AnimalService } from "@services/animal.service";
import { Animal } from "@common/entities/animal";

@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: [],
})

export class DashboardComponent implements OnInit {

    public animals: Array<Animal>;
    private readonly animalService: AnimalService;

    public constructor(animalService: AnimalService) {
        this.animals = [];
        this.animalService = animalService;
    }

    public ngOnInit(): void {
        this.animalService.getAnimals()
            .subscribe((animals: Array<Animal>) => {
                this.animals = animals;
            });
    }

}
