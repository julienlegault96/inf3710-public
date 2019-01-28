// tslint:disable:no-any
export interface AbstractEntity {
    publicKey?: { [key: string]: any };
    foreignKey?: { [key: string]: any };
    partialKey?: { [key: string]: any};
    [key: string]: any;
}
