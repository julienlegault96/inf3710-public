import { injectable, inject } from "inversify";
import { Request, Response, NextFunction } from "express";

import { StatusCodes } from "../status-codes";
import { Clinique } from "../../../common/entities/clinique";
import { CliniquesService } from "../services/cliniques.service";

@injectable()
export class CliniquesRoute {

    private cliniquesService: CliniquesService;

    public constructor(
        @inject(CliniquesService) cliniquesService: CliniquesService
    ) {
        this.cliniquesService = cliniquesService;
    }

    public async getCliniques(req: Request, res: Response): Promise<void> {
        const animals: Array<Clinique> = await this.cliniquesService.getCliniques();

        res.status(StatusCodes.Ok)
            .send(animals);
    }

}
