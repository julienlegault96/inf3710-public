--1) Lister les le numéro et nom des cliniques, leur adresse et leur gestionnaire, ordonnés par le
--numéro de clinique
SELECT c.numClinique, c.rue, c.ville, c.province,  e.nom , e.prenom FROM CLinique c, Employe e
WHERE c.numEmploye = e.numEmploye;
--2) Lister les noms des animaux sans doublons dans toutes les cliniques
SELECT a.nom FROM Animal a,  EnregistrementAnimalClinique e
WHERE a.numAnimal = e.numAnimal
GROUP BY a.nom;
--3) Lister les numéros et noms des propriétaires d’animaux ainsi que les détails de leurs
--animaux dans une clinique donnée (à vous de la choisir)
SELECT p.numProprietaire, p.nom, p.prenom, a.numAnimal, a.nom, a.type, a.description, a.dob, a.doi, a.etat
FROM Proprietaire p, Animal a, EnregistrementProprioClinique e WHERE 
a.numProprietaire = p.numProprietaire AND 
e.numProprietaire = p.numProprietaire AND
e.numClinique = 1;
--4) Lister l’ensemble des examens d’un animal donné

--QUESTION??

SELECT * FROM examen WHERE numAnimal = 1;
--5) Lister le détail des traitements d’un animal suite à un examen donné
--???????
SELECT t.numTraitement, t.description, t.cout FROM traitement t, Operation o, Examen e WHERE 
e.numExamen = '1' AND 
e.numExamen = o.numExamen AND
o.numTraitement = t.numTraitement;
--6) Lister le salaire total des employés par clinique ordonné par numéro de clinique
--?????????
--7) Lister le nombre total d’animaux d’un type donné (vous pouvez le choisir) dans chaque
--clinique
SELECT count(*) FROM EnregistrementAnimalClinique e, Animal a WHERE
a.type = 'Chat' AND
a.numAnimal = e.numAnimal GROUP BY e.numClinique;
--8) Lister le coût minimum, maximum et moyen des traitements
SELECT min(cout), max(cout), avg(cout) FROM Traitement; 
--9) Quels sont les noms des employés de plus de 50 ans ordonnés par nom ?
--10) Quels sont les propriétaires dont le nom contient « blay » ?
--11) Supprimez le vétérinaire « Jean Tremblay »
--12) Lister les détails des propriétaires qui ont un chat et un chien
--13) Lister les détails des propriétaires qui ont un chat ou un chien
--14) Lister les détails des propriétaires qui ont un chat mais pas de chien vacciné contre la
--grippe (la condition vacciné contre la grippe ne s’applique qu’aux chiens)
--15) Lister tous les animaux d’une clinique donnée avec leurs traitements s’ils existent. Dans le
--cas contraire, affichez null.