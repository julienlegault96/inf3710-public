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
                animal.numproprietaire,
                animal.nom,
                animal.type,
                animal.description,
                animal.dob,
                animal.doi,
                animal.etat
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
                "UPDATE public.Animal SET numProprietaire = $2, numClinique = $3, nom = $4, type = $5, description = $6, dob = $7, doi = $8, etat = $9 WHERE numAnimal = $1",
            values: [
                id,
                animal.numproprietaire,
                animal.numclinique,
                animal.nom,
                animal.type,
                animal.description,
                animal.dob,
                animal.doi,
                animal.etat
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

    public deleteAnimal(numanimal: number): Promise<boolean> {
        const queryConfig: QueryConfig = {
            text: "DELETE FROM public.Animal WHERE numAnimal = $1",
            values: [
                numanimal
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
