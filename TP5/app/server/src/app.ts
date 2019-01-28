import { injectable, inject } from "inversify";
import * as Express from "express";
import { ServerHost } from "../../common/hosts/server-host";

import { RouterFactory } from "./router-factory";

@injectable()
export class App {

    // private socket: Socket;
    private expressApp: Express.Application;
    private routes: RouterFactory;

    public constructor(
        @inject(RouterFactory) routes: RouterFactory
    ) {
        this.expressApp = Express();
        this.routes = routes;
    }

    public start(): void {
        this.expressApp.use(this.routes.getRoutes());

        this.expressApp.listen(ServerHost.port, () => {
            // tslint:disable-next-line:no-console
            console.log(`Listening on port ${ServerHost.port}`);
        });
    }

}
