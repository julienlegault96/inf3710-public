import { Observable, of } from "rxjs";
import { AbstractRequestService } from "@services/abstract/abstract-request.service";
import { Traitement } from "@common/entities/traitement";
import { Endpoints } from "@common/endpoints";

export class TreatmentsService extends AbstractRequestService {

    public getTreatments(numAnimal: number): Observable<Array<Traitement>> {
        return this.getRequest(`${Endpoints.Animals}/${numAnimal}/traitements`);
    }

    public getTreatmentsCost(numAnimal: number): Observable<number> {
        return this.getRequest(`${Endpoints.Animals}/${numAnimal}/traitements/cout`);
    }

}
