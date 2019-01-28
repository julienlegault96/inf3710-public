import { Component, OnInit } from "@angular/core";

import { AnimalService } from "@services/animal.service";

@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: [],
})

export class DashboardComponent implements OnInit {

    public animals: Array<string>;
    private animalService: AnimalService;

    public constructor(animalService: AnimalService) {
        this.animalService = animalService;
        this.animals = [];
    }

    public ngOnInit(): void {
        this.animalService.getAnimals()
            .subscribe((animals: Array<string>) => {
                this.animals = animals;
            });
    }

}
