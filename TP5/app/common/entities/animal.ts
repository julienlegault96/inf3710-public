import { AbstractEntity } from "./abstract-entity";

export interface Animal extends AbstractEntity {
    // tslint:disable-next-line:no-any
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
