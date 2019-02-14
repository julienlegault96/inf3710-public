CREATE DATABASE University;

CREATE TABLE Etudiant (
	sid VARCHAR(10) PRIMARY KEY,
	snom VARCHAR(25),
	sexe CHAR(1),
	age SMALLINT,
	moyenne VARCHAR(5),
	CHECK (sexe='M' OR sexe='F')
);

CREATE TABLE Dept (
	dip VARCHAR(10) PRIMARY KEY,
	nombrephds SMALLINT
);

CREATE TABLE Prof (
	pid VARCHAR(10) PRIMARY KEY,
	pnom VARCHAR(10),
	dep VARCHAR(10),
	FOREIGN KEY (dep) REFERENCES Dept(dip)
);

CREATE TABLE Cours (
	cno VARCHAR(10) PRIMARY KEY,
	cnom VARCHAR(25),
	dep VARCHAR(10),
	FOREIGN KEY (dep) REFERENCES Dept(dip)
);

CREATE TABLE Section (
	cno VARCHAR(10),
	sectno VARCHAR(1),
	pid VARCHAR(10),
	PRIMARY KEY(cno, sectno),
	FOREIGN KEY(pid) REFERENCES Prof(pid) ON DELETE SET NULL,
	FOREIGN KEY(cno) REFERENCES Cours(cno) ON DELETE CASCADE
);

CREATE TABLE Inscription(
	sid VARCHAR(10),
	cno VARCHAR(10),
	sectno VARCHAR(10),
	note INTEGER,
	PRIMARY KEY(sid, cno, sectno),
	FOREIGN KEY(sid) REFERENCES Etudiant(sid),
	FOREIGN KEY(cno, sectno) REFERENCES Section(cno, sectno)
);