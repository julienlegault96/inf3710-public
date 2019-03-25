import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { AbstractRequestService } from "@services/abstract/abstract-request.service";
import { Endpoints } from "@common/endpoints";
import { Animal } from "@common/entities/animal";

@Injectable()
export class AnimalService extends AbstractRequestService {

    public getAnimals(filterName?: string): Observable<Array<Animal>> {
        if (filterName) {
            return this.getRequest(Endpoints.Animals, undefined, {tag: "filterName", value: filterName});
        }

        return this.getRequest(Endpoints.Animals);
    }

    public addAnimal(animal: Animal): Observable<void> {
        return this.postRequest(Endpoints.Animals, animal);
    }

    public deleteAnimal(animal: Animal): Observable<void> {
        return this.deleteRequest(Endpoints.Animals, `${animal.numclinique}/${animal.numanimal}`);
    }

}
