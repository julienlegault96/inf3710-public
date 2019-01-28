import { AbstractEntity } from "./abstract-entity";

export interface Surgery extends AbstractEntity {
    primaryKey: {
        number: number;
    };
    date: string;
    quantity: number;
    startDate: string;
    endDate: string;
}
