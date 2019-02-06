import { injectable, inject } from "inversify";
import { Request, Response, NextFunction } from "express";

import { StatusCodes } from "../status-codes";

import { AnimalService } from "../services/animal.service";
import { Animal } from "../../../common/entities/animal";

@injectable()
export class AnimalsRoute {

    private animalService: AnimalService;

    public constructor(
        @inject(AnimalService) animalService: AnimalService
    ) {
        this.animalService = animalService;
    }

    public async getAnimals(req: Request, res: Response): Promise<void> {
        const filterName: string | undefined = req.query.filterName;
        const animals: Array<Animal> = await this.animalService.getAnimals(filterName);

        res.status(StatusCodes.Ok)
            .send(animals);
    }

    public async addAnimal(req: Request, res: Response): Promise<void> {
        const animal: Animal = req.body;
        const isAdded: boolean = await this.animalService.addAnimal(animal);

        res.status(isAdded ? StatusCodes.Ok : StatusCodes.BadRequest)
            .send();
    }

    public async updateAnimal(req: Request, res: Response): Promise<void> {
        const id: number = req.params.id;
        const animal: Animal = req.body;
        const isUpdated: boolean = await this.animalService.updateAnimal(id, animal);

        res.status(isUpdated ? StatusCodes.Ok : StatusCodes.BadRequest)
            .send();
    }

    public async deleteAnimal(req: Request, res: Response): Promise<void> {
        const id: number = req.params.id;
        const isDeleted: boolean = await this.animalService.deleteAnimal(id);

        res.status(isDeleted ? StatusCodes.Ok : StatusCodes.BadRequest)
            .send();
    }

}
