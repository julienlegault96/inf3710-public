import { injectable, inject } from "inversify";
import { Animal } from "../../../common/entities/animal";
import { DBService } from "./db.service";
import { QueryResult, QueryConfig } from "pg";

@injectable()
export class AnimalService {

    private readonly dbService: DBService;

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
            queryConfig.text += " WHERE LOWER(nom) LIKE $1";
            queryConfig.values = [
                "%" + filterName.toLowerCase() + "%"
            ];
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

    public updateAnimal(animal: Animal): Promise<boolean> {
        const queryConfig: QueryConfig = {
            text:
                "UPDATE public.Animal SET numProprietaire = $2, nom = $3, type = $4, description = $5, dob = $6, doi = $7, etat = $8 WHERE numAnimal = $1 AND numProprietaire = $2",
            values: [
                animal.numanimal,
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
            .then((response: QueryResult) => {
                return true;
            })
            .catch((reason) => {
                this.logQueryError(reason);

                return false;
            });
    }

    public deleteAnimal(numAnimal: number, numProprietaire: number): Promise<boolean> {
        const queryConfig: QueryConfig = {
            text: "DELETE FROM public.Animal WHERE numAnimal = $1 AND numProprietaire = $2",
            values: [
                numAnimal,
                numProprietaire
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
