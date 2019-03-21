import "reflect-metadata";
import { Container } from "inversify";

import { App } from "./app";
import { RouterFactory } from "./router-factory";
import { AnimalsRoute } from "./routes/animals.route";
import { AnimalService } from "./services/animal.service";
import { DBService } from "./services/db.service";
import { CliniquesService } from "./services/cliniques.service";
import { CliniquesRoute } from "./routes/cliniques.route";

export const container = new Container();

container.bind(App).toSelf();
container.bind(RouterFactory).toSelf();
container.bind(AnimalsRoute).toSelf();
container.bind(AnimalService).toSelf();
container.bind(CliniquesRoute).toSelf();
container.bind(CliniquesService).toSelf();
container.bind(DBService).toSelf().inSingletonScope();
