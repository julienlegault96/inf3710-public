import { injectable, inject } from "inversify";
import * as Express from "express";
import * as bodyParser from "body-parser";

import { ServerHost } from "../../common/hosts/server-host";
import { RouterFactory } from "./router-factory";

@injectable()
export class App {

    private expressApp: Express.Application;
    private routerFactory: RouterFactory;

    public constructor(
        @inject(RouterFactory) routes: RouterFactory
    ) {
        this.expressApp = Express();
        this.routerFactory = routes;
        this.config();
    }

    public start(): void {
        const router: Express.Router = this.routerFactory.getRouter();
        this.expressApp.use(router);
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
