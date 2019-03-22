import { injectable, inject } from "inversify";
import { Request, Response, Router } from "express";

import { Endpoints } from "../../../common/endpoints";
import { StatusCodes } from "../status-codes";

import { CliniquesService } from "../services/cliniques.service";
import { Clinique } from "../../../common/entities/clinique";

@injectable()
export class CliniquesRoute {

    private service: CliniquesService;

    public constructor(
        @inject(CliniquesService) service: CliniquesService
    ) {
        this.service = service;
    }

    public get(): Router {
        const router: Router = Router();

        router.get(`/${Endpoints.Cliniques}`, this.getCliniques.bind(this))

        return router;
    }

    private async getCliniques(req: Request, res: Response): Promise<void> {
        const animals: Array<Clinique> = await this.service.getCliniques();

        res.status(StatusCodes.Ok)
            .send(animals);
    }

}
