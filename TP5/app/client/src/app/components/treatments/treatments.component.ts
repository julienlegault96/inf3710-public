import { Component, Input } from "@angular/core";

import { Animal } from "@common/entities/animal";
import { TreatmentsService } from "@services/treatments.service";
import { Traitement } from "@common/entities/traitement";

@Component({
    selector: "app-treatments",
    templateUrl: "./treatments.component.html",
    styleUrls: [],
})

export class TreatmentsComponent {

    @Input() public animal: Animal;
    public treatments: Array<Traitement>;
    private readonly treatmentsService: TreatmentsService;

    public constructor(treatmentsService: TreatmentsService) {
        this.treatmentsService = treatmentsService;
        this.treatments = [];
    }

    public ngOnInit(): void {
        if (this.animal.numanimal) {
            this.treatmentsService.getTreatments(this.animal.numanimal)
                .subscribe((treatments: Array<Traitement>) => {
                    this.treatments = treatments;
                });
        }
    }

}
