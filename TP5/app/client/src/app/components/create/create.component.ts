import { Component } from "@angular/core";

import { AnimalService } from "@services/animal.service";

@Component({
    selector: "app-create",
    templateUrl: "./create.component.html",
    styleUrls: [],
})

export class CreateComponent {

    public clinicId: string;
    public name: string;
    public type: string;
    public description: string;
    public birthday: string;
    public registry: string;
    public state: string;
    private animalService: AnimalService;

    public constructor(animalService: AnimalService) {
        this.animalService = animalService;
        this.clinicId = "";
        this.name = "";
        this.type = "";
        this.description = "";
        this.birthday = "";
        this.registry = "";
        this.state = "";
    }

    public submit(): void {
        // TODO Implement this

        // const hasBeenCreated: boolean = this.animalService.createAnimal(
        //     this.clinicId,
        //     this.name,
        //     this.type,
        //     this.description,
        //     this.birthday,
        //     this.registry,
        //     this.state
        // );

        // if (!hasBeenCreated) {
        //     this.displayInvalidInput();
        // }
        // else {
        //     this.displayHasBeenCreated();
        // }
    }

}
