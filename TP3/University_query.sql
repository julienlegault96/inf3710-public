--1) (0.5 point) Retourner tous les étudiants par ordre croissant sur leur nom
SELECT * FROM etudiant ORDER By snom;
--2) (0.5 point) Retourner le nom des professeurs et leur département. Nommez les colonnes Professeur et Dep
SELECT pnom AS Professeur, dep AS Dep FROM prof; 
--3) (1 point) Retourner le nom des professeurs qui travaillent dans un département de plus de 10 PHDs
SELECT pnom FROM prof, Dept  
WHERE 
dep = dip 
AND 
nombrephds > 10;
--4) (1 point) Retourner la plus haute note du cours '105' (toutes sections confondues)
SELECT max(note) FROM Inscription
WHERE 
cno = '105';
--5) (1 point) Retourner la plus haute note du cours '105' par section
SELECT max(note), sectno FROM Inscription
WHERE 
cno = '105'
GROUP BY sectno;
--6) (1 point) Pour chaque cours, retourner le nombre d'étudiants par section pour les sections de plus d'un étudiant (exemple : c3, s1, 20)
SELECT count(*) AS nd, cno, sectno FROM Inscription
GROUP BY sectno, cno
HAVING count(*) > 1;
--7) (1 point) Retourner les infos des étudiants et de leurs inscriptions. La table doit également comprendre les étudiants qui ne sont inscrits dans aucun cours
SELECT * FROM etudiant
LEFT JOIN inscription ON etudiant.sid = inscription.sid;
--8) (1 point) Retourner l'info des étudiants qui ne sont inscrits à aucun cours - Utilisez une sousrequête
SELECT * FROM (
	SELECT * FROM etudiant
	LEFT JOIN inscription ON etudiant.sid = inscription.sid
) AS foo
WHERE foo.cno IS NULL;
--9) (1 point) Imprimer les informations des cours qui parlent de géométrie (toutes les combinaisons de titres possibles) 
SELECT * FROM cours
WHERE LOWER(cnom) LIKE '%geometrie%';
--10) (1 point) Imprimer le nom des étudiants qui suivent un cours de géométrie (toutes les combinaisons de titres possibles)
SELECT e.sid, e.snom, e.sexe, e.age, e.moyenne
FROM cours c, etudiant e, inscription i
WHERE i.sid=e.sid AND i.cno = c.cno AND LOWER(cnom) LIKE '%geometrie%';
--11) (1 point) Imprimer le nom des étudiants qui sont inscrits à au moins un cours du département GIGL et au moins un cours du département de mathématiques - Utilisez INTERSECT
SELECT snom FROM etudiant e, inscription i, cours c 
WHERE e.sid = i.sid AND
c.cno = i.cno AND
c.dep = 'gigl'
INTERSECT
SELECT snom FROM etudiant e, inscription i, cours c 
WHERE e.sid = i.sid AND
c.cno = i.cno AND
c.dep = 'Maths';
--12) (1 point) Imprimer le nom des étudiants qui suivent un cours du département GIGL OU un cours du département de mathématiques
SELECT snom FROM etudiant e, inscription i, cours c
FULL JOIN (SELECT snom, etudiant.sid FROM etudiant, inscription i, cours c 
WHERE etudiant.sid = i.sid AND
c.cno = i.cno AND
c.dep = 'Maths') B ON e.sid = b.sid
WHERE e.sid = i.sid AND
c.cno = i.cno AND
c.dep = 'gigl';
--13) (1 point) Quelle est la différence d'âge entre le plus vieux et le plus jeune étudiant ? Affichez le résultat dans une colonne nommée Difference
SELECT MAX(age)-MIN(age) difference from Etudiant;
--14) (1 point) Quel est le nombre d'étudiants dont la moyenne est supérieure à la moyenne de tous les étudiants ?
SELECT count(*) from etudiant e
WHERE CAST(e.moyenne AS NUMERIC) > (SELECT AVG(CAST(moyenne AS NUMERIC)) FROM etudiant);
--15) (1 point) Quels sont le ou les étudiants avec la plus grande moyenne ? Affichez le nom des étudiants et leur moyenne 
SELECT * from etudiant e
WHERE CAST(e.moyenne AS NUMERIC) = (SELECT MAX(CAST(moyenne AS NUMERIC)) FROM etudiant);