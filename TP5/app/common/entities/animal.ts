export interface Animal {
    numanimal?: number;
    numproprietaire: number;
    numclinique: number;
    nom: string;
    type: string;
    description: string;
    dob: string;
    doi: string;
    etat: "vivant" | "decede";
}
