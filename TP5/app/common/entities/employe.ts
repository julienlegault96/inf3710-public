export interface Employe {
    numemploye?: number;
    nom: string;
    prenom: string;
    rue: string;
    ville: string;
    province: string;
    codepostal: string;
    telephone: string;
    dob: string;
    sexe: "M" | "F";
    nas: string;
    fonction: "gestionnaire" | "veterinaire" | "infirmiere" | "secretaire" | "entretien";
    salaire: number;
}
