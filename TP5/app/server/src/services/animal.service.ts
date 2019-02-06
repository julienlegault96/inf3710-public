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

    public getAnimals(filterName?: string): Promise<Array<Animal>> {
        const queryConfig: QueryConfig = {
            text: "SELECT * FROM public.Animal"
        };

        if (filterName) {
            queryConfig.text += ` WHERE LOWER(name) LIKE '%${filterName.toLowerCase()}%'`;
        }

        return this.dbService.query(queryConfig)
            .then((response: QueryResult) => {
                return response.rows;
            })
            .catch((reason) => {
                this.logQueryError(reason);

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
                animal.registry,
                animal.state
            ],
        };

        return this.dbService.query(queryConfig)
            .then(() => {
                return true;
            })
            .catch((reason) => {
                this.logQueryError(reason);

                return false;
            });
    }

    public updateAnimal(id: number, animal: Animal): Promise<boolean> {
        const queryConfig: QueryConfig = {
            text:
                // tslint:disable-next-line:max-line-length
                "UPDATE public.Animal SET clinicId = $2, name = $3, type = $4, description = $5, birthday = $6, registry = $7, state = $8 WHERE id = $1",
            values: [
                id,
                animal.clinicId,
                animal.name,
                animal.type,
                animal.description,
                animal.birthday,
                animal.registry,
                animal.state
            ],
        };

        return this.dbService.query(queryConfig)
            .then(() => {
                return true;
            })
            .catch((reason) => {
                this.logQueryError(reason);

                return false;
            });
    }

    public deleteAnimal(id: number): Promise<boolean> {
        const queryConfig: QueryConfig = {
            text: "DELETE FROM public.Animal WHERE id = $1",
            values: [
                id
            ],
        };

        return this.dbService.query(queryConfig)
            .then(() => {
                return true;
            })
            .catch((reason) => {
                this.logQueryError(reason);

                return false;
            });
    }

    // tslint:disable-next-line:no-any
    private logQueryError(reason: any): void {
        // tslint:disable-next-line:no-console
        console.log(reason);
    }

}
