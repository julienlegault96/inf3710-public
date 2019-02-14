INSERT INTO Dept VALUES ('genChem', 9);
INSERT INTO Dept VALUES ('gigl', 40);
INSERT INTO Dept VALUES ('Maths', 5);

INSERT INTO Cours VALUES ('105', 'programmation', 'gigl');
INSERT INTO Cours VALUES ('200', 'NLP', 'gigl');
INSERT INTO Cours VALUES ('304', 'Geometrie 101', 'Maths');
INSERT INTO Cours VALUES ('305', 'Theoremes en geometrie', 'Maths');
INSERT INTO Cours VALUES ('306', 'Geometrie intermediaire', 'Maths');
INSERT INTO Cours VALUES ('307', 'Geometrie','Maths');
	
INSERT INTO Prof VALUES ('p1', 'AZ', 'gigl');	
INSERT INTO Prof VALUES ('p2', 'MG', 'gigl');
INSERT INTO Prof VALUES ('p3', 'NZ', 'Maths');
INSERT INTO Prof VALUES ('p4', 'LH', 'Maths');

INSERT INTO Section VALUES ('105', '1', 'p1');	
INSERT INTO Section VALUES ('105', '2', 'p1');	
INSERT INTO Section VALUES ('305', '1', 'p3');	
INSERT INTO Section VALUES ('305', '2', 'p4');

INSERT INTO Etudiant VALUES ('s1', 'Simon Nissan', 'M', 20, '4.2');
INSERT INTO Etudiant VALUES ('s2', 'Laurent Passepartout', 'M', 30, '3.2');
INSERT INTO Etudiant VALUES ('s3', 'Alexandra Laplace', 'F', 40, '2.8');
INSERT INTO Etudiant VALUES ('s4', 'Alex Laplace', 'F', 30, '3.5');
INSERT INTO Etudiant VALUES ('s5', 'Simon Belanger', 'M', 20, '3.2');
INSERT INTO Etudiant VALUES ('s6', 'Mark Zuck', 'M', 30, '1.2');
INSERT INTO Etudiant VALUES ('s7', 'Sophie Yenamarre', 'M', 30, '4.2');

INSERT INTO Inscription VALUES ('s3', '105', '1', 90);
INSERT INTO Inscription VALUES ('s2', '105', '1', 60);
INSERT INTO Inscription VALUES ('s1', '105', '2', 70);	
INSERT INTO Inscription VALUES ('s5', '105', '2', 70);
INSERT INTO Inscription VALUES ('s5', '305', '2', 100);
INSERT INTO Inscription VALUES ('s6', '305', '2', 65);

-- Puisque la cle etrangere n'est pas presente dans la table Cours, l'insertion dans la table Inscription echoue