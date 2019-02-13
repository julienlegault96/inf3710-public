import { Component, Input } from "@angular/core";

import { Animal } from "@common/entities/animal";
import { TreatmentsService } from "@services/treatments.service";
import { Treatment } from "@common/entities/treatment";

@Component({
    selector: "app-treatments",
    templateUrl: "./treatments.component.html",
    styleUrls: [],
})

export class TreatmentsComponent {

    @Input() public animal: Animal;
    public treatments: Array<Treatment>;
    private treatmentsService: TreatmentsService;

    public constructor(treatmentsService: TreatmentsService) {
        this.treatmentsService = treatmentsService;
        this.treatments = [];
    }

    public ngOnInit(): void {
        if (this.animal.id) {
            this.treatmentsService.getTreatments(this.animal.id)
                .subscribe((treatments: Array<Treatment>) => {
                    this.treatments = treatments;
                });
        }
    }

}
