import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { AbstractRequestService } from "@services/abstract/abstract-request.service";
import { Endpoints } from "@common/endpoints";
import { Animal } from "@common/entities/animal";

@Injectable()
export class AnimalService extends AbstractRequestService {

    public getAnimals(name?: string): Observable<Array<Animal>> {
        if (name) {
            return this.getRequest(Endpoints.Animals, undefined, { tag: "name", value: name });
        }

        return this.getRequest(Endpoints.Animals);
    }

    public addAnimal(animal: Animal): Observable<void> {
        return this.postRequest(Endpoints.Animals, animal);
    }

    public updateAnimal(animal: Animal): Observable<void> {
        return this.putRequest(Endpoints.Animals, animal);
    }

    public deleteAnimal(animal: Animal): Observable<void> {
        return this.deleteRequest(Endpoints.Animals, `${animal.numproprietaire}/${animal.numanimal}`);
    }

}
