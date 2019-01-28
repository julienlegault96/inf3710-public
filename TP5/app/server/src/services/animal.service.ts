import { injectable } from "inversify";

@injectable()
export class AnimalService {

    public getAnimals(): Array<string> {
        return ["Chat", "Chien"];
    }

}
