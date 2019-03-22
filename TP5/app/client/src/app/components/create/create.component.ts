import { Component, ViewChild, ElementRef } from "@angular/core";

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

    @ViewChild("clinique") clinique: ElementRef;
    @ViewChild("proprietaire") proprietaire: ElementRef;
    @ViewChild("nom") nom: ElementRef;
    @ViewChild("type") type: ElementRef;
    @ViewChild("description") description: ElementRef;
    @ViewChild("dob") dob: ElementRef;
    @ViewChild("doi") doi: ElementRef;
    @ViewChild("etat") etat: ElementRef;

    public cliniques: Array<Clinique>;
    public proprietaires: Array<Proprietaire>;

    private cliniqueService: CliniqueService;
    private animalService: AnimalService;
    private proprietaireService: ProprietaireService;

    public constructor(cliniqueService: CliniqueService, animalService: AnimalService, proprietaireService: ProprietaireService) {
        this.cliniques = [];
        this.proprietaires = [];
        this.cliniqueService = cliniqueService;
        this.animalService = animalService;
        this.proprietaireService = proprietaireService;

        this.getValidClinique();
    }

    public submit(): void {
        if (!this.displayInvalidInputs()) {
            return;
        }

        const animal: Animal = {
            numclinique: this.getNumClinique(),
            numproprietaire: this.getNumProprietaire(),
            nom: this.getNom(),
            type: this.getType(),
            description: this.getDescription(),
            dob: this.getDob(),
            doi: this.getDoi(),
            etat: this.getEtat()
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
        this.proprietaireService.getProprietaires(this.getNumClinique())
            .subscribe((proprietaires: Array<Proprietaire>) => {
                this.proprietaires = proprietaires;
            });
    }

    private displayInvalidInputs(): boolean {
        let isValid: boolean = true;

        if (!this.getNumClinique()) {
            (this.clinique.nativeElement as HTMLSelectElement).classList.add("is-invalid");
            isValid = false;
        }

        if (!this.getNumProprietaire()) {
            (this.proprietaire.nativeElement as HTMLSelectElement).classList.add("is-invalid");
            isValid = false;
        }

        if (!this.getNom()) {
            (this.nom.nativeElement as HTMLInputElement).classList.add("is-invalid");
            isValid = false;
        }

        if (!this.getType()) {
            (this.type.nativeElement as HTMLInputElement).classList.add("is-invalid");
            isValid = false;
        }

        if (!this.getDescription()) {
            (this.description.nativeElement as HTMLInputElement).classList.add("is-invalid");
            isValid = false;
        }

        if (!this.getDob() || !this.getDob().match(/^\d\d\d\d-\d\d-\d\d$/)) {
            (this.dob.nativeElement as HTMLInputElement).classList.add("is-invalid");
            isValid = false;
        }

        if (!this.getDoi() || !this.getDob().match(/^\d\d\d\d-\d\d-\d\d$/)) {
            (this.doi.nativeElement as HTMLInputElement).classList.add("is-invalid");
            isValid = false;
        }

        if (!this.getEtat() || this.getEtat() !== "vivant" && this.getEtat() !== "decede") {
            (this.etat.nativeElement as HTMLSelectElement).classList.add("is-invalid");
            isValid = false;
        }

        return isValid;
    }

    private removeInvalidInput(event: Event): void {
        (event.target as HTMLElement).classList.remove("is-invalid");
    }

    private getNumClinique(): number {
        return parseInt((this.clinique.nativeElement as HTMLSelectElement).value);
    }

    private getNumProprietaire(): number {
        return parseInt((this.proprietaire.nativeElement as HTMLSelectElement).value);
    }

    private getNom(): string {
        return (this.nom.nativeElement as HTMLSelectElement).value;
    }

    private getType(): string {
        return (this.type.nativeElement as HTMLSelectElement).value;
    }

    private getDescription(): string {
        return (this.description.nativeElement as HTMLSelectElement).value;
    }

    private getDob(): string {
        return (this.dob.nativeElement as HTMLSelectElement).value;
    }

    private getDoi(): string {
        return (this.doi.nativeElement as HTMLSelectElement).value;
    }

    private getEtat(): "vivant" | "decede" {
        return (this.etat.nativeElement as HTMLSelectElement).value as "vivant" | "decede";
    }

}
