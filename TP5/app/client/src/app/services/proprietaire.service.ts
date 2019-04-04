import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { AbstractRequestService } from "@services/abstract/abstract-request.service";
import { Endpoints } from "@common/endpoints";
import { Proprietaire } from "@common/entities/proprietaire";
import { tap } from "rxjs/operators";

@Injectable()
export class ProprietaireService extends AbstractRequestService {

    private proprietaires: Array<Proprietaire>;

    public getProprietaires(): Observable<Array<Proprietaire>> {
        if (!this.proprietaires) {
            return this.getRequest(Endpoints.Proprietaire)
                .pipe(
                    tap((proprietaires: Array<Proprietaire>) => {
                        this.proprietaires = proprietaires;
                    })
                );
        }

        return of(this.proprietaires);
    }

}
