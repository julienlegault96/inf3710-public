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
    private animalService: AnimalService;

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

    public formatDate(date: string): string {
        moment.locale("fr");

        return moment(date).format("YYYY-MM-DD");
    }

    public show(): void {
        // const myModal = document.getElementById("exampleModalLabel");
        // myModal.modal("show");

        // console.log(bs);

        // const myModalInstance = new bsn.Modal(myModal);

        // console.log(myModalInstance.show);
        // myModalInstance.show();
    }

}
