import { injectable } from "inversify";
import { Animal } from "../../../common/entities/animal";

@injectable()
export class AnimalService {

    public getAnimals(): Promise<Array<Animal>> {
        return new Promise((resolve, reject) => {
            resolve([
                {
                    foreignKey: {
                        clinicNumber: 1,
                    },
                    partialKey: {
                        number: 1,
                    },
                    name: "Doggo",
                    type: "Pug",
                    description: "Small doggo",
                    birthday: "2010-08-04",
                    registryDay: "2012-06-16",
                    state: "Healthy",
                },
            ]);
        });
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
