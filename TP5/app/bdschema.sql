CREATE TABLE IF NOT EXISTS Employe(
	numEmploye SERIAL,
	nom VARCHAR(25) NOT NULL,
	prenom VARCHAR(25) NOT NULL,
	rue VARCHAR (50) NOT NULL,
	ville VARCHAR(25) NOT NULL,
	province VARCHAR(25) NOT NULL,
	codePostal VARCHAR(25) NOT NULL,
	telephone VARCHAR(10)NOT NULL,
	dob DATE NOT NULL,
	sexe CHAR(1) NOT NULL,
	nas VARCHAR(11) NOT NULL,
	fonction VARCHAR(25) NOT NULL,
	salaire INTEGER NOT NULL,
	check ((sexe = 'M') OR (sexe = 'F')),
	check ((fonction = 'gestionnaire') OR (fonction = 'veterinaire') OR (fonction = 'infirmiere') OR
		   (fonction = 'secretaire') OR (fonction = 'entretien')),
	PRIMARY KEY(numEmploye)
);

CREATE TABLE IF NOT EXISTS Clinique(
	numClinique SERIAL,
	numEmploye SERIAL,
	rue VARCHAR (50) NOT NULL,
	ville VARCHAR(25) NOT NULL,
	province VARCHAR(25) NOT NULL,
	codePostal VARCHAR(25) NOT NULL,
	telephone VARCHAR(10) NOT NULL,
	telecopieur VARCHAR(10) NOT NULL,
	PRIMARY KEY(numClinique),
	FOREIGN KEY (numEmploye) references Employe(numEmploye)
);

CREATE TABLE IF NOT EXISTS Proprietaire (
	numProprietaire SERIAL,
	nom VARCHAR(25) NOT NULL,
	prenom VARCHAR(25) NOT NULL,
	rue VARCHAR(50) NOT NULL,
	ville VARCHAR(25) NOT NULL,
	province VARCHAR(25) NOT NULL,
	codePostal VARCHAR(25) NOT NULL,
	telephone VARCHAR(10) NOT NULL,
	PRIMARY KEY (numProprietaire)
);

CREATE TABLE IF NOT EXISTS EnregistrementProprioClinique (
	numProprietaire SERIAL,
	numClinique SERIAL,
	PRIMARY KEY (numProprietaire, numClinique),
	FOREIGN KEY (numProprietaire) REFERENCES Proprietaire(numProprietaire),
	FOREIGN KEY (numClinique) REFERENCES Clinique(numClinique)
);

CREATE TABLE IF NOT EXISTS Animal(
	numAnimal SERIAL,
	numProprietaire SERIAL,
	nom VARCHAR(25) NOT NULL,
	type VARCHAR(25) NOT NULL,
	description VARCHAR(140) NOT NULL,
	dob DATE NOT NULL,
	doi DATE NOT NULL,
	etat VARCHAR(25) NOT NULL,
	check((etat = 'vivant') OR (etat ='decede')),
	PRIMARY KEY(numAnimal, numProprietaire),
	FOREIGN KEY(numProprietaire) references Proprietaire(numProprietaire)
);

CREATE TABLE IF NOT EXISTS EnregistrementAnimalClinique(
	numAnimal SERIAL,
	numClinique SERIAL,
	numProprietaire SERIAL,
	PRIMARY KEY(numAnimal, numClinique, numProprietaire),
	FOREIGN KEY (numAnimal, numProprietaire) references Animal(numAnimal, numProprietaire),
	FOREIGN KEY (numClinique) references Clinique(numClinique)
);

CREATE TABLE IF NOT EXISTS Examen (
	numExamen SERIAL,
	numClinique SERIAL,
	numEmploye SERIAL,
	numAnimal SERIAL,
	numProprietaire SERIAL,
	date DATE NOT NULL,
	heure TIME NOT NULL,
	description VARCHAR(140),
	PRIMARY KEY (numExamen, numClinique),
	FOREIGN KEY (numClinique) REFERENCES Clinique(numClinique),
	FOREIGN KEY (numEmploye) REFERENCES Employe(numEmploye),
	FOREIGN KEY (numAnimal, numProprietaire) REFERENCES Animal(numAnimal, numProprietaire)
);

CREATE TABLE IF NOT EXISTS Traitement(
	numTraitement SERIAL,
	description VARCHAR(140) NOT NULL,
	cout numeric(7,2) NOT NULL,
	PRIMARY KEY(numTraitement)
);

CREATE TABLE IF NOT EXISTS Operation (
	numTraitement SERIAL,
	numExamen SERIAL,
	numClinique SERIAL,
	date DATE NOT NULL,
	quantite INTEGER NOT NULL,
	dateDebut TIME NOT NULL,
	dateFin TIME NOT NULL,
	PRIMARY KEY (numTraitement, numExamen, numClinique),
	FOREIGN KEY (numTraitement) REFERENCES Traitement(numTraitement),
	FOREIGN KEY (numExamen, numClinique) REFERENCES Examen(numExamen, numClinique)
);