import { injectable, inject } from "inversify";
import * as Express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import * as morgan from "morgan";

import { ServerHost } from "../../common/hosts/server-host";
import { AnimalsRoute } from "./routes/animals.route";
import { CliniquesRoute } from "./routes/cliniques.route";
import { ProprietairesRoute } from "./routes/proprietaires.route";

@injectable()
export class App {

    private readonly animalsRoute: AnimalsRoute;
    private readonly cliniquesRoute: CliniquesRoute;
    private readonly proprietaireRoute: ProprietairesRoute;
    private readonly expressApp: Express.Application;

    public constructor(
        @inject(AnimalsRoute) animalsRoute: AnimalsRoute,
        @inject(CliniquesRoute) cliniquesRoute: CliniquesRoute,
        @inject(ProprietairesRoute) proprietairesRoute: ProprietairesRoute
    ) {
        this.animalsRoute = animalsRoute;
        this.cliniquesRoute = cliniquesRoute;
        this.proprietaireRoute = proprietairesRoute;
        this.expressApp = Express();
        this.config();
    }

    public start(): void {
        this.expressApp
            .use(this.animalsRoute.get())
            .use(this.cliniquesRoute.get())
            .use(this.proprietaireRoute.get());

        // tslint:disable-next-line:no-console
        console.log(`Listening on port ${ServerHost.Port}`);
        this.expressApp.listen(ServerHost.Port);
    }

    private config(): void {
        this.expressApp
            .use(cors())
            .use(bodyParser.json({ limit: "10000kb" }))
            .use(bodyParser.urlencoded({ extended: true }))
            .use(morgan("dev"));
    }

}
