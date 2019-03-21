import { Component } from "@angular/core";

import { AnimalService } from "@services/animal.service";
import { CliniqueService } from "@services/clinique.service";
import { Clinique } from "@common/entities/clinique";

@Component({
    selector: "app-create",
    templateUrl: "./create.component.html",
    styleUrls: [],
})

export class CreateComponent {

    public cliniques: Array<Clinique>;
    public numclinique: string;
    public nom: string;
    public type: string;
    public description: string;
    public dob: string;
    public doi: string;
    public etat: string;

    private cliniqueService: CliniqueService;
    private animalService: AnimalService;

    public constructor(cliniqueService: CliniqueService, animalService: AnimalService) {
        this.cliniqueService = cliniqueService;
        this.animalService = animalService;
        this.numclinique = "";
        this.nom = "";
        this.type = "";
        this.description = "";
        this.dob = "";
        this.doi = "";
        this.etat = "";

        this.getValidClinique();
    }

    public submit(): void {
        console.log(
            this.numclinique,
            this.nom,
            this.type,
            this.description,
            this.dob,
            this.doi,
            this.etat
        );
        // TODO Implement this

        // const hasBeenAdded: boolean = this.animalService.addAnimal(
        //     this.numclinique,
        //     this.nom,
        //     this.type,
        //     this.description,
        //     this.dob,
        //     this.doi,
        //     this.etat
        // );

        // if (!hasBeenAdded) {
        //     this.displayInvalidInput();
        // }
        // else {
        //     this.displayHasBeenAdded();
        // }
    }

    private getValidClinique(): void {
        this.cliniqueService.getCliniques()
            .subscribe((cliniques: Array<Clinique>) => {
                this.cliniques = cliniques;
            });
    }

}
