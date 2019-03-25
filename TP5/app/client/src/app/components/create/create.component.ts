import { Component, ViewChild, ElementRef } from "@angular/core";

import { AnimalService } from "@services/animal.service";
import { Animal } from "@common/entities/animal";

@Component({
    selector: "app-create",
    templateUrl: "./create.component.html",
    styleUrls: [],
})

export class CreateComponent {

    @ViewChild("modalCloser") private readonly modalCloser: ElementRef<HTMLButtonElement>;
    private readonly animalService: AnimalService;

    public constructor(animalService: AnimalService) {
        this.animalService = animalService;
        this.submit = this.submit.bind(this);
    }

    public submit(animal: Animal): Promise<void> {
        return new Promise((resolve, reject) => {
            this.animalService.addAnimal(animal)
                .subscribe((a) => {
                    this.modalCloser.nativeElement.click();
                    resolve();
                });
        });
    }

}
