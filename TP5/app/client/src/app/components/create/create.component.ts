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

    @ViewChild("clinique") private readonly clinique: ElementRef<HTMLSelectElement>;
    @ViewChild("proprietaire") private readonly proprietaire: ElementRef<HTMLSelectElement>;
    @ViewChild("nom") private readonly nom: ElementRef<HTMLInputElement>;
    @ViewChild("type") private readonly type: ElementRef<HTMLInputElement>;
    @ViewChild("description") private readonly description: ElementRef<HTMLTextAreaElement>;
    @ViewChild("dob") private readonly dob: ElementRef<HTMLInputElement>;
    @ViewChild("doi") private readonly doi: ElementRef<HTMLInputElement>;
    @ViewChild("etat") private readonly etat: ElementRef<HTMLSelectElement>;
    @ViewChild("modalCloser") private readonly modalCloser: ElementRef<HTMLButtonElement>;

    public cliniques: Array<Clinique>;
    public proprietaires: Array<Proprietaire>;

    private readonly cliniqueService: CliniqueService;
    private readonly animalService: AnimalService;
    private readonly proprietaireService: ProprietaireService;

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
                this.modalCloser.nativeElement.click();
            });
    }

    public updateValidProprietaires(): void {
        this.proprietaireService.getProprietaires(this.getNumClinique())
            .subscribe((proprietaires: Array<Proprietaire>) => {
                this.proprietaires = proprietaires;
            });
    }

    public removeInvalidInput(event: Event): void {
        (event.target as HTMLElement).classList.remove("is-invalid");
    }

    private getValidClinique(): void {
        this.cliniqueService.getCliniques()
            .subscribe((cliniques: Array<Clinique>) => {
                this.cliniques = cliniques;
            });
    }

    private displayInvalidInputs(): boolean {
        let isValid: boolean = true;

        if (!this.getNumClinique()) {
            this.clinique.nativeElement.classList.add("is-invalid");
            isValid = false;
        }

        if (!this.getNumProprietaire()) {
            this.proprietaire.nativeElement.classList.add("is-invalid");
            isValid = false;
        }

        if (!this.getNom()) {
            this.nom.nativeElement.classList.add("is-invalid");
            isValid = false;
        }

        if (!this.getType()) {
            this.type.nativeElement.classList.add("is-invalid");
            isValid = false;
        }

        if (!this.getDescription()) {
            this.description.nativeElement.classList.add("is-invalid");
            isValid = false;
        }

        if (!this.getDob() || !this.getDob().match(/^\d\d\d\d-\d\d-\d\d$/)) {
            this.dob.nativeElement.classList.add("is-invalid");
            isValid = false;
        }

        if (!this.getDoi() || !this.getDob().match(/^\d\d\d\d-\d\d-\d\d$/)) {
            this.doi.nativeElement.classList.add("is-invalid");
            isValid = false;
        }

        if (!this.getEtat() || this.getEtat() !== "vivant" && this.getEtat() !== "decede") {
            this.etat.nativeElement.classList.add("is-invalid");
            isValid = false;
        }

        return isValid;
    }

    private getNumClinique(): number {
        return parseInt(this.clinique.nativeElement.value, 10);
    }

    private getNumProprietaire(): number {
        return parseInt(this.proprietaire.nativeElement.value, 10);
    }

    private getNom(): string {
        return this.nom.nativeElement.value;
    }

    private getType(): string {
        return this.type.nativeElement.value;
    }

    private getDescription(): string {
        return this.description.nativeElement.value;
    }

    private getDob(): string {
        return this.dob.nativeElement.value;
    }

    private getDoi(): string {
        return this.doi.nativeElement.value;
    }

    private getEtat(): "vivant" | "decede" {
        return this.etat.nativeElement.value as "vivant" | "decede";
    }

}
