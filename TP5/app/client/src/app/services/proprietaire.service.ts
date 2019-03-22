import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { AbstractRequestService } from "@services/abstract/abstract-request.service";
import { Endpoints } from "@common/endpoints";
import { Proprietaire } from "@common/entities/proprietaire";

@Injectable()
export class ProprietaireService extends AbstractRequestService {

    public getProprietaires(numClinique: number): Observable<Array<Proprietaire>> {
        return this.getRequest(Endpoints.Proprietaire, undefined, {tag: "numClinique", value: numClinique});
    }

}
