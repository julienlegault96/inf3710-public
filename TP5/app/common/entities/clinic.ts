import { AbstractEntity } from "./abstract-entity";
import { Address } from "./address";

export interface Clinic extends AbstractEntity {
    id: number;
    address: Address;
    telephone: string;
    fax: string;
}
