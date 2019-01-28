import { injectable, inject } from "inversify";
import { Request, Response, NextFunction } from "express";

import { StatusCodes } from "../status-codes";

import { AnimalService } from "../services/animal.service";

@injectable()
export class AnimalsRoute {

    private animalService: AnimalService;

    public constructor(
        @inject(AnimalService) animalService: AnimalService
    ) {
        this.animalService = animalService;
    }

    public getAnimals(req: Request, res: Response, next: NextFunction): void {
        res.status(StatusCodes.Ok)
            .send(JSON.stringify(this.animalService.getAnimals()));
    }

}
