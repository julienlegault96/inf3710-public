--Emplpoye
insert into Employe VALUES (DEFAULT, 'Guay-Tanguay', 'Gaetan', '1265 1er avenue', 'Montreal', 'Quebec', 'ABC 123', '514123456', '1969-01-01', 'M', '123456789' , 'gestionnaire', 100000  );
insert into Employe VALUES (DEFAULT, 'Tremblay', 'Jeanne', '20 cote des neiges', 'Montreal', 'Quebec', 'H2H 1C9', '514987654', '1980-03-03', 'F', '987654321' , 'secretaire', 50000  );
insert into Employe VALUES (DEFAULT, 'Leblanc', 'Marc', '150 3e avenue', 'Montreal', 'Quebec', 'H5H 1D3', '514567379', '1975-02-07', 'M', '134786903' , 'entretien', 40000  );
insert into Employe VALUES (DEFAULT, 'Leclerc', 'Stephanie', '1500 rue principale', 'Montreal', 'Quebec', 'H8Q 3B9', '514823478', '1988-12-29', 'F', '456823970' , 'veterinaire', 70000  );
insert into Employe VALUES (DEFAULT, 'Quesnel', 'Annie', '6000 rue Latraverse', 'Longueil', 'Quebec', 'H7T 1T3', '450345786', '1962-11-09', 'F', '657211555' , 'infirmiere', 60000  );
insert into Employe VALUES (DEFAULT, 'Tanguay', 'Andreanne', '65 2e avenue', 'Quebec', 'Quebec', 'ABC 123', '418123456', '1979-01-01', 'F', '190548222' , 'gestionnaire', 110000  );
insert into Employe VALUES (DEFAULT, 'Tremblay', 'Jean', '2010 La promenade', 'Levis', 'Quebec', 'E2A 9Y6', '418987654', '1950-04-21', 'M', '987654321' , 'secretaire', 55000  );
insert into Employe VALUES (DEFAULT, 'Fiori', 'Alonso', '199 3e avenue', 'Beauport', 'Quebec', 'Y0T 2E4', '418567379', '1999-02-07', 'M', '123459874' , 'veterinaire', 70000  );
insert into Employe VALUES (DEFAULT, 'Lenglet', 'Clement', '1500 Grande Allee', 'Quebec', 'Quebec', 'A1Q 3B9', '418659004', '1990-12-29', 'M', '765999234' , 'entretien', 40000  );
insert into Employe VALUES (DEFAULT, 'Belanger', 'Laurence', '6000 rue ABC', 'Quebec', 'Quebec', 'Y0P 3R4', '418606775', '1968-10-31', 'F', '123938745' , 'infirmiere', 59000  );

--Clinique
insert into Clinique VALUES (default, 1, '3030 cote des neiges', 'Montreal' , 'Quebec', 'H4H 6H6', '5145557677', '5144441233' );
insert into Clinique VALUES (default, 6, '123 Grande Allee', 'Quebec' , 'Quebec', 'O8Y 0W2', '4181234567', '4180993321' );

--Prorpietaire
insert into Proprietaire VALUES (default, 'Lejeune', 'Michel', '123 Edouard-Montpetit', 'Montreal', 'Quebec', 'H6T 5R4', '4381234567' );
insert into Proprietaire VALUES (default, 'Lajeune', 'Michelle', '123 rue Gertrude', 'Levis', 'Quebec', 'J8T 5R4', '4181234567' );

--EnregistrementProprioClinique
insert into EnregistrementProprioClinique VALUES(1, 1);
insert into EnregistrementProprioClinique VALUES(1, 2);
insert into EnregistrementProprioClinique VALUES(2, 2);

insert into Animal VALUES(default, 1, 'Leeroy', 'Chien', 'Chien veroce ATTENTION', ' 2010-01-01', '2010-01-10', 'vivant' );
insert into Animal VALUES(default, 1, 'Adrien', 'Chat', 'Chat peureux', ' 2015-02-17', '2015-03-10', 'vivant' );
insert into Animal VALUES(default, 2, 'Bob', 'Chat', 'Chat affectif', ' 2014-02-17', '2014-03-10', 'vivant' );