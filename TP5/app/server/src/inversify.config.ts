import "reflect-metadata";
import { Container } from "inversify";

import { App } from "./app";
import { AnimalsRoute } from "./routes/animals.route";
import { AnimalService } from "./services/animal.service";
import { DBService } from "./services/db.service";
import { CliniquesService } from "./services/cliniques.service";
import { CliniquesRoute } from "./routes/cliniques.route";
import { ProprietairesRoute } from "./routes/proprietaires.route";
import { ProprietairesService } from "./services/proprietaires.service";

export const container = new Container();

container.bind(App).toSelf();
container.bind(AnimalsRoute).toSelf();
container.bind(AnimalService).toSelf();
container.bind(CliniquesRoute).toSelf();
container.bind(CliniquesService).toSelf();
container.bind(ProprietairesRoute).toSelf();
container.bind(ProprietairesService).toSelf();
container.bind(DBService).toSelf().inSingletonScope();
