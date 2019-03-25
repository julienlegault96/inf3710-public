import { Client, QueryResult, QueryConfig } from "pg";
import { AUTHENTICATION } from "../authentication";
import { injectable } from "inversify";

@injectable()
export class DBService {

    private readonly client: Client;

    public constructor() {
        this.client = new Client(AUTHENTICATION);
        this.client.connect()
            // tslint:disable-next-line:no-any
            .catch((error: any) => {
                // tslint:disable-next-line:no-console
                console.log(error);
            });
    }

    // https://node-postgres.com/features/queries
    public query(queryConfig: QueryConfig): Promise<QueryResult> {
        return this.client.query(queryConfig);
    }

}
