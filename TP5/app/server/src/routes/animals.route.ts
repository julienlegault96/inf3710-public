import { injectable, inject } from "inversify";
import { Request, Response, Router } from "express";

import { Endpoints } from "../../../common/endpoints";
import { StatusCodes } from "../status-codes";

import { AnimalService } from "../services/animal.service";
import { Animal } from "../../../common/entities/animal";

@injectable()
export class AnimalsRoute {

    private readonly service: AnimalService;

    public constructor(
        @inject(AnimalService) service: AnimalService
    ) {
        this.service = service;
    }

    public get(): Router {
        const router: Router = Router();

        router.get(`/${Endpoints.Animals}`, this.getAnimals.bind(this));
        router.post(`/${Endpoints.Animals}`, this.addAnimal.bind(this));
        router.put(`/${Endpoints.Animals}`, this.updateAnimal.bind(this));
        router.delete(`/${Endpoints.Animals}/:numProprietaire/:numAnimal`, this.deleteAnimal.bind(this));

        return router;
    }

    private async getAnimals(req: Request, res: Response): Promise<void> {
        const filterName: string | undefined = req.query.filterName;
        const animals: Array<Animal> = await this.service.getAnimals(filterName);

        res.status(StatusCodes.Ok)
            .send(animals);
    }

    private async addAnimal(req: Request, res: Response): Promise<void> {
        const animal: Animal = req.body;
        const isAdded: boolean = await this.service.addAnimal(animal);

        res.status(isAdded ? StatusCodes.Ok : StatusCodes.BadRequest)
            .send();
    }

    private async updateAnimal(req: Request, res: Response): Promise<void> {
        const animal: Animal = req.body;
        console.log(animal);
        const isUpdated: boolean = await this.service.updateAnimal(animal);

        res.status(isUpdated ? StatusCodes.Ok : StatusCodes.BadRequest)
            .send();
    }

    private async deleteAnimal(req: Request, res: Response): Promise<void> {
        const numAnimal: number = req.params.numAnimal;
        const numProprietaire: number = req.params.numProprietaire;
        const isDeleted: boolean = await this.service.deleteAnimal(numAnimal, numProprietaire);

        res.status(isDeleted ? StatusCodes.Ok : StatusCodes.BadRequest)
            .send();
    }

}
