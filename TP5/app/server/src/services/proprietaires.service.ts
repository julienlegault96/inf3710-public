import { injectable, inject } from "inversify";
import { DBService } from "./db.service";

@injectable()
export class ProprietairesService {

    private dbService: DBService;

    public constructor(
        @inject(DBService) dbService: DBService
    ) {
        this.dbService = dbService;
    }

}