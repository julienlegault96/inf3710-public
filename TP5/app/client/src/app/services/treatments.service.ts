import { Observable, of } from "rxjs";
import { Traitement } from "@common/entities/traitement";

export class TreatmentsService {

    public getTreatments(id: number): Observable<Array<Traitement>> {
        return of([
            {
                description: "aaa",
                cout: 200
            },
            {
                description: "bbb",
                cout: 333
            }
        ]);
    }

}
