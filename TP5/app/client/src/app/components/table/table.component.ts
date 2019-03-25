import { Component, OnInit } from "@angular/core";
import * as moment from "moment";

import { AnimalService } from "@services/animal.service";
import { Animal } from "@common/entities/animal";

@Component({
    selector: "app-table",
    templateUrl: "./table.component.html",
    styleUrls: [],
})

export class TableComponent implements OnInit {

    public animals: Array<Animal>;
    private readonly animalService: AnimalService;

    public constructor(animalService: AnimalService) {
        this.animals = [];
        this.animalService = animalService;
        this.update = this.update.bind(this);
    }

    public ngOnInit(): void {
        this.updateAnimals();
    }

    public formatDate(date: string): string {
        moment.locale("fr");

        return moment(date).format("YYYY-MM-DD");
    }

    public filterAnimals(event: Event): void {
        this.updateAnimals((event.target as HTMLInputElement).value);
    }

    public update(): void {
        this.updateAnimals();
    }

    private updateAnimals(filterName?: string): void {
        this.animalService.getAnimals(filterName)
            .subscribe((animals: Array<Animal>) => {
                this.animals = animals;
            });
    }

}
