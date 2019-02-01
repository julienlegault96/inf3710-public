import { AbstractEntity } from "./abstract-entity";
import { Address } from "./address";

export interface Customer extends AbstractEntity {
    clinicId: number;
    id: number;
    name: string;
    address: Address;
    telephone: string;
}
