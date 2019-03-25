import { Component, ViewChild, ElementRef, OnInit, Input } from "@angular/core";
import * as moment from "moment";

import { Animal } from "@common/entities/animal";
import { Proprietaire } from "@common/entities/proprietaire";
import { ProprietaireService } from "@services/proprietaire.service";

@Component({
    selector: "app-animal-form",
    templateUrl: "./animal-form.component.html",
    styleUrls: [],
})

export class AnimalFormComponent implements OnInit {

    @Input() public onSubmit: (animal: Animal) => Promise<void>;
    @Input() public submitText: string;
    @Input() public submitIcon: string;
    @Input() public animal?: Animal;

    @ViewChild("proprietaire") private readonly proprietaire: ElementRef<HTMLSelectElement>;
    @ViewChild("nom") private readonly nom: ElementRef<HTMLInputElement>;
    @ViewChild("type") private readonly type: ElementRef<HTMLInputElement>;
    @ViewChild("description") private readonly description: ElementRef<HTMLTextAreaElement>;
    @ViewChild("dob") private readonly dob: ElementRef<HTMLInputElement>;
    @ViewChild("doi") private readonly doi: ElementRef<HTMLInputElement>;
    @ViewChild("etat") private readonly etat: ElementRef<HTMLSelectElement>;

    public proprietaires: Array<Proprietaire>;

    private readonly proprietaireService: ProprietaireService;

    public constructor(proprietaireService: ProprietaireService) {
        this.proprietaires = [];
        this.proprietaireService = proprietaireService;
    }

    public ngOnInit(): void {
        this.getProprietaires();
    }

    public submit(): void {
        if (!this.displayInvalidInputs()) {
            return;
        }

        const animal: Animal = {
            numanimal: this.animal ? this.animal.numanimal : undefined,
            numproprietaire: this.getNumProprietaire(),
            nom: this.getNom(),
            type: this.getType(),
            description: this.getDescription(),
            dob: this.getDob(),
            doi: this.getDoi(),
            etat: this.getEtat()
        };

        this.onSubmit(animal)
            .catch((error: any) => {
                console.log(error);
            });
    }

    public getProprietaires(): void {
        this.proprietaireService.getProprietaires()
            .subscribe((proprietaires: Array<Proprietaire>) => {
                this.proprietaires = proprietaires;
            });
    }

    public removeInvalidInput(event: Event): void {
        (event.target as HTMLElement).classList.remove("is-invalid");
    }

    public formatDate(date: string): string {
        moment.locale("fr");

        return moment(date).format("YYYY-MM-DD");
    }

    private displayInvalidInputs(): boolean {
        let isValid: boolean = true;

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
