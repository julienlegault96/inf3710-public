import { injectable, inject } from "inversify";
import { DBService } from "./db.service";
import { QueryConfig, QueryResult } from "pg";
import { Proprietaire } from "../../../common/entities/proprietaire";

@injectable()
export class ProprietairesService {

    private readonly dbService: DBService;

    public constructor(
        @inject(DBService) dbService: DBService
    ) {
        this.dbService = dbService;
    }

    public getProprietaires(): Promise<Array<Proprietaire>> {
        const queryConfig: QueryConfig = {
            text: "SELECT * FROM Proprietaire"
        };

        return this.dbService.query(queryConfig)
            .then((response: QueryResult) => {
                return response.rows;
            })
            .catch((reason) => {
                this.logQueryError(reason);

                return [];
            });
    }

    // tslint:disable-next-line:no-any
    private logQueryError(reason: any): void {
        // tslint:disable-next-line:no-console
        console.log(reason);
    }

}
