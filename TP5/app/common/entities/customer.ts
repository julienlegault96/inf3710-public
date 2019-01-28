import { AbstractEntity } from "./abstract-entity";
import { Address } from "./address";

export interface Customer extends AbstractEntity {
    foreignKey: {
        clinicNumber: number;
    };
    partialKey: {
        number: number;
    };
    name: string;
    address: Address;
    telephone: string;
}
