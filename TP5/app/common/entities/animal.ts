import { AbstractEntity } from "./abstract-entity";

export interface Animal extends AbstractEntity {
    id?: number;
    clinicId: number;
    name: string;
    type: string;
    description: string;
    birthday: string;
    registry: string;
    state: string;
}
