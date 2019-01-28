import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { AbstractRequestService } from "@services/abstract/abstract-request.service";
import { Endpoints } from "@common/endpoints";

@Injectable()
export class AnimalService extends AbstractRequestService {

    public getAnimals(): Observable<Array<string>> {
        return this.getRequest(Endpoints.Animals);
    }

}
