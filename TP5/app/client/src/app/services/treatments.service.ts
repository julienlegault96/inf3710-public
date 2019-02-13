import { Observable, of } from "rxjs";
import { Treatment } from "@common/entities/treatment";

export class TreatmentsService {

    public getTreatments(id: number): Observable<Array<Treatment>> {
        return of([
            {
                description: "aaa",
                cost: 200
            },
            {
                description: "bbb",
                cost: 333
            }
        ]);
    }

}
