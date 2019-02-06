import { AbstractEntity } from "./abstract-entity";
import { Address } from "./address";

export interface Employee extends AbstractEntity {
    id?: number;
    name: string;
    address: Address;
    telephone: string;
    birthday: string;
    sex: string;
    nas: string;
    role: string;
    salary: number;
}
