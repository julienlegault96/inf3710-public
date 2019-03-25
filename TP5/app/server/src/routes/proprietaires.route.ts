import { injectable, inject } from "inversify";
import { Request, Response, Router } from "express";

import { Endpoints } from "../../../common/endpoints";
import { StatusCodes } from "../status-codes";

import { ProprietairesService } from "../services/proprietaires.service";
import { Proprietaire } from "../../../common/entities/proprietaire";

@injectable()
export class ProprietairesRoute {

    private readonly service: ProprietairesService;

    public constructor(
        @inject(ProprietairesService) service: ProprietairesService
    ) {
        this.service = service;
    }

    public get(): Router {
        const router: Router = Router();

        router.get(`/${Endpoints.Proprietaire}`, this.getProprietaires.bind(this));

        return router;
    }

    private async getProprietaires(req: Request, res: Response): Promise<void> {
        if (!req.query.numClinique) {
            res.status(StatusCodes.BadRequest).send();

            return;
        }

        const numClinique: number = req.query.numClinique;
        const proprietaires: Array<Proprietaire> = await this.service.getProprietaires(numClinique);

        res.status(StatusCodes.Ok)
            .send(proprietaires);
    }

}
