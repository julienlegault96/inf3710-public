import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { AbstractRequestService } from "@services/abstract/abstract-request.service";
import { Endpoints } from "@common/endpoints";
import { Animal } from "@common/entities/animal";

@Injectable()
export class AnimalService extends AbstractRequestService {

    public getAnimals(): Observable<Array<Animal>> {
        return this.getRequest(Endpoints.Animals);
    }

    public addAnimal(animal: Animal): Observable<void> {
        return this.postRequest(Endpoints.Animals, animal);
    }

}
