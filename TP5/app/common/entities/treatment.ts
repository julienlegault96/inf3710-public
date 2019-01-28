import { AbstractEntity } from "./abstract-entity";

export interface Treatment extends AbstractEntity {
    primaryKey: {
        number: number;
    };
    description: string;
    cost: number;
}
