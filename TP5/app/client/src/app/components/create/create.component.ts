import { Component } from "@angular/core";

import { AnimalService } from "@services/animal.service";
import { CliniqueService } from "@services/clinique.service";
import { Clinique } from "@common/entities/clinique";
import { Animal } from "@common/entities/animal";
import { Proprietaire } from "@common/entities/proprietaire";
import { ProprietaireService } from "@services/proprietaire.service";

@Component({
    selector: "app-create",
    templateUrl: "./create.component.html",
    styleUrls: [],
})

export class CreateComponent {

    public cliniques: Array<Clinique>;
    public proprietaires: Array<Proprietaire>;
    public numclinique: number;
    public numproprietaire: number;
    public nom: string;
    public type: string;
    public description: string;
    public dob: string;
    public doi: string;
    public etat: string;

    private cliniqueService: CliniqueService;
    private animalService: AnimalService;
    private proprietaireService: ProprietaireService;

    public constructor(cliniqueService: CliniqueService, animalService: AnimalService, proprietaireService: ProprietaireService) {
        this.cliniques = [];
        this.proprietaires = [];
        this.cliniqueService = cliniqueService;
        this.animalService = animalService;
        this.proprietaireService = proprietaireService;
        this.numclinique = 0;
        this.numproprietaire = 1;
        this.nom = "";
        this.type = "";
        this.description = "";
        this.dob = "";
        this.doi = "";
        this.etat = "";

        this.getValidClinique();
    }

    public submit(): void {
        if (!this.numclinique || !this.numproprietaire || !this.nom || !this.type || !this.description || !this.dob || !this.doi || !this.etat) {
        //     this.displayInvalidInput();
            return;
        }

        if (this.etat !== "vivant" && this.etat !== "decede") {
        //     this.displayInvalidInput();
            return;
        }
    
        const animal: Animal = {
            numclinique: this.numclinique,
            numproprietaire: this.numproprietaire,
            nom: this.nom,
            type: this.type,
            description: this.description,
            dob: this.dob,
            doi: this.doi,
            etat: this.etat
        };

        this.animalService.addAnimal(animal)
            .subscribe(() => {
                console.log("succ");
            });
    }

    private getValidClinique(): void {
        this.cliniqueService.getCliniques()
            .subscribe((cliniques: Array<Clinique>) => {
                this.cliniques = cliniques;
            });
    }

    private updateValidProprietaires(): void {
        console.log("a");
        this.proprietaireService.getProprietaires(this.numclinique)
            .subscribe((proprietaires: Array<Proprietaire>) => {
                this.proprietaires = proprietaires;
            });
    }

}
