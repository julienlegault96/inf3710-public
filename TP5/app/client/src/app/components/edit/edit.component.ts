import { Component, Input, OnInit } from "@angular/core";

import { Animal } from "@common/entities/animal";
import { Proprietaire } from "@common/entities/proprietaire";
import { AnimalService } from "@services/animal.service";

@Component({
    selector: "app-edit",
    templateUrl: "./edit.component.html",
    styleUrls: [],
})

export class EditComponent {

    @Input() public animal: Animal;
    @Input() public onUpdate: () => void;
    public proprietaires: Array<Proprietaire>;

    private readonly animalService: AnimalService;

    public constructor(animalService: AnimalService) {
        this.proprietaires = [];
        this.animalService = animalService;
        this.submit = this.submit.bind(this);
    }

    public submit(animal: Animal): Promise<void> {
        return new Promise((resolve, reject) => {
            this.animalService.updateAnimal(animal)
            .subscribe(() => {
                    resolve();
                    this.onUpdate();
                });
        });
    }

}
