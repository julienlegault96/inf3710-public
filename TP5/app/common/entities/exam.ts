import { AbstractEntity } from "./abstract-entity";

export interface Exam extends AbstractEntity {
    id: number;
    date: string;
    hour: number;
    description: string;
}
