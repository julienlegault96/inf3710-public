import { AbstractEntity } from "./abstract-entity";

export interface Surgery extends AbstractEntity {
    id?: number;
    date: string;
    quantity: number;
    startDate: string;
    endDate: string;
}
