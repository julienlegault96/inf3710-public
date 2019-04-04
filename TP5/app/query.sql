--1) Lister les le numéro et nom des cliniques, leur adresse et leur gestionnaire, ordonnés par le
--numéro de clinique
SELECT c.numClinique, c.rue, c.ville, c.province,  e.nom , e.prenom
FROM CLinique c, Employe e
WHERE c.numEmploye = e.numEmploye
ORDER BY c.numClinique;

--2) Lister les noms des animaux sans doublons dans toutes les cliniques
SELECT a.nom
FROM Animal a, EnregistrementAnimalClinique e
WHERE a.numAnimal = e.numAnimal
GROUP BY a.nom;

--3) Lister les numéros et noms des propriétaires d’animaux ainsi que les détails de leurs
--animaux dans une clinique donnée (à vous de la choisir)
SELECT p.numProprietaire, p.nom, p.prenom, a.numAnimal, a.nom, a.type, a.description, a.dob, a.doi, a.etat
FROM Proprietaire p, Animal a, EnregistrementProprioClinique e
WHERE a.numProprietaire = p.numProprietaire
AND e.numProprietaire = p.numProprietaire
AND e.numClinique = 1;

--4) Lister l’ensemble des examens d’un animal donné
SELECT * 
FROM examen 
WHERE numAnimal = 1;

--5) Lister le détail des traitements d’un animal suite à un examen donné
SELECT t.numTraitement, t.description, t.cout 
FROM traitement t, Operation o, Examen e 
WHERE e.numExamen = 1
AND e.numExamen = o.numExamen
AND o.numTraitement = t.numTraitement;

--6) Lister le salaire total des employés par clinique ordonné par numéro de clinique
SELECT ce.numClinique, SUM(e.salaire) salaireTotal
FROM EnregistrementEmployeClinique ce, Employe e
WHERE ce.numEmploye = e.numEmploye
GROUP BY ce.numClinique;

--7) Lister le nombre total d’animaux d’un type donné (vous pouvez le choisir) dans chaque
--clinique
SELECT numClinique, count(*) nbAnimaux
FROM EnregistrementAnimalClinique e, Animal a
WHERE a.type = 'Chat'
AND a.numAnimal = e.numAnimal
GROUP BY e.numClinique;

--8) Lister le coût minimum, maximum et moyen des traitements
SELECT min(cout), max(cout), avg(cout)
FROM Traitement; 

--9) Quels sont les noms des employés de plus de 50 ans ordonnés par nom ?
SELECT nom, prenom
FROM Employe
WHERE DATE_PART('year', AGE(current_date, dob)) > 50
ORDER BY nom;

--10) Quels sont les propriétaires dont le nom contient « blay » ?
SELECT *
FROM Proprietaire
WHERE LOWER(nom) LIKE '%blay%';

--11) Supprimez le vétérinaire « Jean Tremblay »
DELETE FROM Employe
WHERE nom = 'Tremblay'
AND prenom = 'Jean'
AND fonction = 'veterinaire';

--12) Lister les détails des propriétaires qui ont un chat et un chien 
SELECT p.numProprietaire, p.nom, p.prenom, p.rue, p.ville, p.province, p.codePostal, p.telephone 
FROM Proprietaire p, Animal a 
WHERE a.type = 'Chat' 
AND a.numProprietaire = p.numProprietaire
INTERSECT
SELECT p.numProprietaire, p.nom, p.prenom, p.rue, p.ville, p.province, p.codePostal, p.telephone
FROM Proprietaire p, Animal a
WHERE a.type = 'Chien'
AND a.numProprietaire = p.numProprietaire;

--13) Lister les détails des propriétaires qui ont un chat ou un chien
SELECT p.numProprietaire, p.nom, p.prenom, p.rue, p.ville, p.province, p.codePostal, p.telephone
FROM Proprietaire p, Animal a
WHERE a.type = 'Chat'
AND a.numProprietaire = p.numProprietaire
UNION
SELECT p.numProprietaire, p.nom, p.prenom, p.rue, p.ville, p.province, p.codePostal, p.telephone
FROM Proprietaire p, Animal a
WHERE a.type = 'Chien'
AND a.numProprietaire = p.numProprietaire;

--14) Lister les détails des propriétaires qui ont un chat mais pas de chien vacciné contre la
--grippe (la condition vacciné contre la grippe ne s’applique qu’aux chiens)
SELECT p.numProprietaire, p.nom, p.prenom, p.rue, p.ville, p.province, p.codePostal, p.telephone
FROM Proprietaire p, Animal a
WHERE a.type = 'Chat'
AND a.numProprietaire = p.numProprietaire
GROUP BY p.numProprietaire 
EXCEPT
SELECT p.numProprietaire, p.nom, p.prenom, p.rue, p.ville, p.province, p.codePostal, p.telephone
FROM Proprietaire p, Animal a, Traitement t, Operation o, Examen e
WHERE t.description LIKE '%grippe%'
AND t.numTraitement = o.numTraitement
AND o.numExamen = e.numExamen
AND e.numAnimal = a.numAnimal
AND a.type = 'Chien'
AND a.numProprietaire = p.numProprietaire
GROUP BY p.numProprietaire;

--15) Lister tous les animaux d’une clinique donnée avec leurs traitements s’ils existent. Dans le
--cas contraire, affichez null.
SELECT Fooo.numAnimal, t.numTraitement, t.description, t.cout
FROM (
	SELECT *
	FROM (
		SELECT ac.numAnimal, e.numExamen
		FROM EnregistrementAnimalClinique ac
		LEFT JOIN Examen e ON e.numAnimal = ac.numAnimal
		WHERE ac.numClinique = 1
	) AS Foo
	LEFT JOIN Operation o ON Foo.numExamen = o.numExamen
	WHERE (Foo.numExamen IS NOT NULL AND numTraitement IS NOT NULL)
	OR (Foo.numExamen IS NULL AND numTraitement IS NULL)
) AS Fooo
LEFT JOIN Traitement t ON Fooo.numTraitement = t.numTraitement
ORDER BY numAnimal;
