import { Component } from "@angular/core";

import { AnimalService } from "@services/animal.service";

@Component({
    selector: "app-create",
    templateUrl: "./create.component.html",
    styleUrls: [],
})

export class CreateComponent {
    
    public numclinique: string;
    public nom: string;
    public type: string;
    public description: string;
    public dob: string;
    public doi: string;
    public etat: string;
    private animalService: AnimalService;

    public constructor(animalService: AnimalService) {
        this.animalService = animalService;
        this.numclinique = "";
        this.nom = "";
        this.type = "";
        this.description = "";
        this.dob = "";
        this.doi = "";
        this.etat = "";
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
