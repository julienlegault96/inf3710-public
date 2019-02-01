import { AbstractEntity } from "./abstract-entity";

export interface Treatment extends AbstractEntity {
    id: number;
    description: string;
    cost: number;
}
