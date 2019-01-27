import "reflect-metadata";
import { Container } from "inversify";
// import { TYPES } from "./types";

import { App } from "./app";
import { Socket } from "./socket";

export const container = new Container();

container.bind(App).toSelf();
container.bind(Socket).toSelf();
// container.bind(TYPES.ExampleClass).to(autExampleClasshentications);
