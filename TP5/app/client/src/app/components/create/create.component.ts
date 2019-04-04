import { Component, ViewChild, ElementRef, Input } from "@angular/core";

import { AnimalService } from "@services/animal.service";
import { Animal } from "@common/entities/animal";

@Component({
    selector: "app-create",
    templateUrl: "./create.component.html",
    styleUrls: [],
})

export class CreateComponent {

    public isContentLoaded: boolean;
    @Input() private readonly onUpdate: () => void;
    @ViewChild("modalCloser") private readonly modalCloser: ElementRef<HTMLButtonElement>;
    private readonly animalService: AnimalService;

    public constructor(animalService: AnimalService) {
        this.animalService = animalService;
        this.isContentLoaded = false;
        this.submit = this.submit.bind(this);
    }

    public submit(animal: Animal): Promise<void> {
        return new Promise((resolve, reject) => {
            this.animalService.addAnimal(animal)
                .subscribe((a) => {
                    this.modalCloser.nativeElement.click();
                    this.onUpdate();
                    resolve();
                });
        });
    }

    public loadContent(): void {
        this.isContentLoaded = true;
    }

}
