import { injectable, inject } from "inversify";
import { Request, Response, Router } from "express";

import { Endpoints } from "../../../common/endpoints";
import { StatusCodes } from "../status-codes";

import { ProprietairesService } from "../services/proprietaires.service";
import { Proprietaire } from "../../../common/entities/proprietaire";

@injectable()
export class ProprietairesRoute {

    private service: ProprietairesService;

    public constructor(
        @inject(ProprietairesService) service: ProprietairesService
    ) {
        this.service = service;
    }

    public get(): Router {
        const router: Router = Router();

        // router.get(`/${Endpoints.Cliniques}`, this.getCliniques.bind(this))

        return router;
    }
    
}