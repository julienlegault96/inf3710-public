import { AbstractEntity } from "./abstract-entity";

export interface Exam extends AbstractEntity {
    primaryKey: {
        number: number;
    };
    date: string;
    hour: number;
    description: string;
}
