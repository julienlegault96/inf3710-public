import { container } from "./inversify.config";
import { App } from "./app";

const app: App = container.get(App);

app.start();
