CREATE TABLE IF NOT EXISTS Employe(
	numEmploye SERIAL,
	nom VARCHAR(25) NOT NULL,
	premon VARCHAR(25) NOT NULL,
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

CREATE TABLE IF NOT EXISTS Animal(
	numAnimal SERIAL,
	nom VARCHAR(25) NOT NULL,
	type VARCHAR(25) NOT NULL,
	description VARCHAR(140) NOT NULL,
	dob DATE NOT NULL,
	doi DATE NOT NULL,
	etat VARCHAR(25) NOT NULL,
	check((etat = 'vivant') OR (etat ='decede')),
	PRIMARY KEY(numAnimal)
);

CREATE TABLE IF NOT EXISTS EnregistrementAnimalClinique(
	numAnimal SERIAL,
	numClinique SERIAL,
	PRIMARY KEY(numAnimal, numClinique),
	FOREIGN KEY (numAnimal) references Animal,
	FOREIGN KEY (numClinique) references Clinique
);

CREATE TABLE IF NOT EXISTS Traitement(
	numTraitement SERIAL,
	description VARCHAR(140) NOT NULL,
	cout INTEGER NOT NULL,
	PRIMARY KEY(numTraitement)
);