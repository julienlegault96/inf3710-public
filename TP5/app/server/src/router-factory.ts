import { injectable, inject } from "inversify";
import { Router, Request, Response } from "express";

import { AnimalsRoute } from "./routes/animals.route";
import { Endpoints } from "../../common/endpoints";
import { CliniquesRoute } from "./routes/cliniques.route";

@injectable()
export class RouterFactory {

    private animalsRoute: AnimalsRoute;
    private cliniquesRoute: CliniquesRoute;

    public constructor(
        @inject(AnimalsRoute) animalsRoute: AnimalsRoute,
        @inject(CliniquesRoute) cliniquesRoute: CliniquesRoute
    ) {
        this.animalsRoute = animalsRoute;
        this.cliniquesRoute = cliniquesRoute;
    }

    public getRouter(): Router {
        const router: Router = Router();

        /*
         * query param:
         *  filterName: string that should be contained it the returned animal name
         * response:
         *  200 status code
         *  a list of animals
         */
        router.get(`/${Endpoints.Animals}`, (req: Request, res: Response) => {
            this.animalsRoute.getAnimals(req, res);
        });

        /*
         * body:
         *  an animal object without the need to specify an id
         * response:
         *  200 or 400 status code
         */
        router.post(`/${Endpoints.Animals}`, (req: Request, res: Response) => {
            this.animalsRoute.addAnimal(req, res);
        });

        /*
         * param:
         *  id: the animal id to be modified
         * body:
         *  an animal object without the need to specify an id
         * response:
         *  200 or 400 status code
         */
        router.put(`/${Endpoints.Animals}/:id`, (req: Request, res: Response) => {
            this.animalsRoute.updateAnimal(req, res);
        });

        /*
         * param:
         *  id: the animal id to be deleted
         * response:
         *  200 or 400 status code
         */
        router.delete(`/${Endpoints.Animals}/:id`, (req: Request, res: Response) => {
            this.animalsRoute.deleteAnimal(req, res);
        });

        router.get(`/${Endpoints.Cliniques}`, (req: Request, res: Response) => {
            this.cliniquesRoute.getCliniques(req, res);
        })

        return router;
    }

}
