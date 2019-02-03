import { injectable, inject } from "inversify";
import { Animal } from "../../../common/entities/animal";
import { DBService } from "./db.service";
import { QueryResult, QueryConfig } from "pg";

@injectable()
export class AnimalService {

    private dbService: DBService;

    public constructor(
        @inject(DBService) dbService: DBService
    ) {
        this.dbService = dbService;
    }

    public getAnimals(): Promise<Array<Animal>> {
        const queryConfig: QueryConfig = {
            text: "SELECT * FROM public.Animal"
        };

        return this.dbService.query(queryConfig)
            .then((response: QueryResult) => {
                return response.rows;
            })
            .catch((reason) => {
                // tslint:disable-next-line:no-console
                console.log(reason);

                return [];
            });
    }

    public addAnimal(animal: Animal): Promise<boolean> {
        const queryConfig: QueryConfig = {
            text: "INSERT INTO public.Animal VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, $7)",
            values: [
                animal.clinicId,
                animal.name,
                animal.type,
                animal.description,
                animal.birthday,
                animal.registryDay,
                animal.state
            ],
        };

        return this.dbService.query(queryConfig)
            .then((response: QueryResult) => {
                return true;
            })
            .catch((reason) => {
                // tslint:disable-next-line:no-console
                console.log(reason);

                return false;
            });
    }

    public updateAnimal(id: string, animal: Animal): Promise<boolean> {
        return new Promise((resolve, reject) => {
            resolve(false);
        });
    }

    public deleteAnimal(id: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            resolve(false);
        });
    }

}
