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
        router.put(`/${Endpoints.Animals}/:id`, this.updateAnimal.bind(this));
        router.delete(`/${Endpoints.Animals}/:numClinique/:numAnimal`, this.deleteAnimal.bind(this));

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
        const id: number = req.params.id;
        const animal: Animal = req.body;
        const isUpdated: boolean = await this.service.updateAnimal(id, animal);

        res.status(isUpdated ? StatusCodes.Ok : StatusCodes.BadRequest)
            .send();
    }

    private async deleteAnimal(req: Request, res: Response): Promise<void> {
        const numClinique: number = req.params.numClinique;
        const numAnimal: number = req.params.numAnimal;
        const isDeleted: boolean = await this.service.deleteAnimal(numClinique, numAnimal);

        res.status(isDeleted ? StatusCodes.Ok : StatusCodes.BadRequest)
            .send();
    }

}
