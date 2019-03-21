import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { AbstractRequestService } from "@services/abstract/abstract-request.service";
import { Endpoints } from "@common/endpoints";
import { Clinique } from "@common/entities/clinique";

@Injectable()
export class CliniqueService extends AbstractRequestService {

    public getCliniques(): Observable<Array<Clinique>> {
        return this.getRequest(Endpoints.Cliniques);
    }

}
