import { injectable, inject } from "inversify";
import * as Express from "express";
import * as bodyParser from "body-parser";

import { ServerHost } from "../../common/hosts/server-host";
import { RouterFactory } from "./router-factory";

@injectable()
export class App {

    private expressApp: Express.Application;
    private routes: RouterFactory;

    public constructor(
        @inject(RouterFactory) routes: RouterFactory
    ) {
        this.expressApp = Express();
        this.config();
        this.routes = routes;
    }

    public start(): void {
        this.expressApp.use(this.routes.getRoutes());
        this.expressApp.listen(ServerHost.Port);
    }

    private config(): void {
        this.expressApp
            .use(bodyParser.json({ limit: "10000kb" }))
            .use(bodyParser.urlencoded({ extended: true }))
            .use((req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
                res.setHeader("Access-Control-Allow-Origin", "*");

                next();
            });
    }

}
