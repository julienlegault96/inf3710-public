import { Component, Input, ViewChild, ElementRef } from "@angular/core";

import { Animal } from "@common/entities/animal";
import { AnimalService } from "@services/animal.service";

@Component({
    selector: "app-details",
    templateUrl: "./details.component.html",
    styleUrls: [],
})

export class DetailsComponent {

    @Input() public animal: Animal;
    @Input() public onUpdate: () => void;
    @ViewChild("modalCloser") private readonly modalCloser: ElementRef<HTMLButtonElement>;
    private readonly animalService: AnimalService;

    public constructor(animalService: AnimalService) {
        this.animalService = animalService;
        this.update = this.update.bind(this);
    }

    public deleteAnimal(): void {
        this.animalService.deleteAnimal(this.animal)
            .subscribe(() => {
                this.modalCloser.nativeElement.click();
                this.onUpdate();
            });
    }

    public update(): void {
        this.modalCloser.nativeElement.click();
        this.onUpdate();
    }

}
