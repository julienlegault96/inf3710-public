import { Component, Input } from "@angular/core";

import { Animal } from "@common/entities/animal";

@Component({
    selector: "app-details",
    templateUrl: "./details.component.html",
    styleUrls: [],
})

export class DetailsComponent {

    @Input() public animal: Animal;

}
