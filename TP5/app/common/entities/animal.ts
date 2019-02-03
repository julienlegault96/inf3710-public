import { AbstractEntity } from "./abstract-entity";

export interface Animal extends AbstractEntity {
    clinicId: number;
    id?: number;
    name: string;
    type: string;
    description: string;
    birthday: string;
    registryDay: string;
    state: string;
}
