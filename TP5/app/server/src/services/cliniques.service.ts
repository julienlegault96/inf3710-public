import { injectable, inject } from "inversify";
import { DBService } from "./db.service";
import { QueryResult, QueryConfig } from "pg";
import { Clinique } from "../../../common/entities/clinique";

@injectable()
export class CliniquesService {

    private dbService: DBService;

    public constructor(
        @inject(DBService) dbService: DBService
    ) {
        this.dbService = dbService;
    }

    public getCliniques(): Promise<Array<Clinique>> {
        const queryConfig: QueryConfig = {
            text: "SELECT * FROM public.Clinique"
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
