import { Client, QueryResult, QueryConfig } from "pg";
import { AUTHENTICATION } from "../authentication";
import { injectable } from "inversify";

@injectable()
export class DBService {

    private readonly client: Client;

    public constructor() {
        this.client = new Client(AUTHENTICATION);
        this.client.connect();
    }

    // https://node-postgres.com/features/queries
    public query(queryConfig: QueryConfig): Promise<QueryResult> {
        return this.client.query(queryConfig);
    }

}
