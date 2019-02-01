import { AbstractEntity } from "./abstract-entity";

export interface Animal extends AbstractEntity {
    foreignKey: {
        clinicNumber: number;
    };
    partialKey: {
        number: number;
    };
    name: string;
    type: string;
    description: string;
    birthday: string;
    registryDay: string;
    state: string;
}
