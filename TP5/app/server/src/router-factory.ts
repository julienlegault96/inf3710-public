import { injectable, inject } from "inversify";
import { Router, Request, Response, NextFunction } from "express";

import { AnimalsRoute } from "./routes/animals.route";
import { Endpoints } from "../../common/endpoints";

@injectable()
export class RouterFactory {

    private animalsRoute: AnimalsRoute;

    public constructor(
        @inject(AnimalsRoute) animalsRoute: AnimalsRoute
    ) {
        this.animalsRoute = animalsRoute;
    }

    public getRoutes(): Router {
        const router: Router = Router();

        // Animals
        router.get(`/${Endpoints.Animals}`, (req: Request, res: Response, next: NextFunction) => {
            this.animalsRoute.getAnimals(req, res, next);
        });

        router.post(`/${Endpoints.Animals}`, (req: Request, res: Response, next: NextFunction) => {
            this.animalsRoute.addAnimal(req, res, next);
        });

        router.put(`/${Endpoints.Animals}/:id`, (req: Request, res: Response, next: NextFunction) => {
            this.animalsRoute.updateAnimal(req, res, next);
        });

        router.delete(`/${Endpoints.Animals}/:id`, (req: Request, res: Response, next: NextFunction) => {
            this.animalsRoute.deleteAnimal(req, res, next);
        });

        return router;
    }

}
