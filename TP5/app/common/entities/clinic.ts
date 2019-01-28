import { AbstractEntity } from "./abstract-entity";
import { Address } from "./address";

export interface Clinic extends AbstractEntity {
    primaryKey: {
        number: number;
    };
    address: Address;
    telephone: string;
    fax: string;
}
