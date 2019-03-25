import { Component, Input } from "@angular/core";
import * as moment from "moment";

import { Animal } from "@common/entities/animal";

@Component({
    selector: "app-edit",
    templateUrl: "./edit.component.html",
    styleUrls: [],
})

export class EditComponent {

    @Input() public animal: Animal;

    public formatDate(date: string): string {
        moment.locale("fr");

        return moment(date).format("YYYY-MM-DD");
    }

}
