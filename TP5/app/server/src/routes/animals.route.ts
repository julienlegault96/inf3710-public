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

    public async getAnimals(req: Request, res: Response, next: NextFunction): Promise<void> {
        res.status(StatusCodes.Ok)
            .send(JSON.stringify(await this.animalService.getAnimals()));
    }

    public async addAnimal(req: Request, res: Response, next: NextFunction): Promise<void> {
        const animal: Animal = req.body;

        res.status(StatusCodes.Ok)
            .send(JSON.stringify(await this.animalService.addAnimal(animal)));
    }

    public async updateAnimal(req: Request, res: Response, next: NextFunction): Promise<void> {
        const id: string = req.params.id; // TODO verify id type
        const animal: Animal = req.body;
        const isUpdated: boolean = await this.animalService.updateAnimal(id, animal);

        res.status(isUpdated ? StatusCodes.Ok : StatusCodes.BadRequest)
            .send();
    }

    public async deleteAnimal(req: Request, res: Response, next: NextFunction): Promise<void> {
        const id: string = req.params.id;
        const isDeleted: boolean = await this.animalService.deleteAnimal(id);

        res.status(isDeleted ? StatusCodes.Ok : StatusCodes.BadRequest)
            .send();
    }

}
