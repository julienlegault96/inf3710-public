import { injectable, inject } from "inversify";
import { Animal } from "../../../common/entities/animal";
import { DBService } from "./db.service";

@injectable()
export class AnimalService {

    private dbService: DBService;

    public constructor(
        @inject(DBService) dbService: DBService
    ) {
        this.dbService = dbService;
    }

    public getAnimals(): Promise<Array<Animal>> {
        return this.dbService.query({ text: "SELECT * FROM public.Animal"})
            .then((response) => {
                return response.rows;
            });
        // return new Promise((resolve, reject) => {
        //     resolve([
        //         {
        //             foreignKey: {
        //                 clinicNumber: 1,
        //             },
        //             partialKey: {
        //                 number: 1,
        //             },
        //             name: "Doggo",
        //             type: "Pug",
        //             description: "Small doggo",
        //             birthday: "2010-08-04",
        //             registryDay: "2012-06-16",
        //             state: "Healthy",
        //         },
        //     ]);
        // });
    }

    public addAnimal(animal: Animal): Promise<boolean> {
        return new Promise((resolve, reject) => {
            resolve(false);
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
