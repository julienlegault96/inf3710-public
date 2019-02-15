--1) (0.5 point) Retourner tous les �tudiants par ordre croissant sur leur nom
SELECT * FROM etudiant ORDER By snom;
--2) (0.5 point) Retourner le nom des professeurs et leur d�partement. Nommez les colonnes Professeur et Dep
SELECT pnom AS Professeur, dep AS Dep FROM prof; 
--3) (1 point) Retourner le nom des professeurs qui travaillent dans un d�partement de plus de 10 PHDs
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
--6) (1 point) Pour chaque cours, retourner le nombre d'�tudiants par section pour les sections de plus d'un �tudiant (exemple : c3, s1, 20)
SELECT count(*) AS nd, cno, sectno FROM Inscription
GROUP BY sectno, cno
HAVING count(*) > 1;
--7) (1 point) Retourner les infos des �tudiants et de leurs inscriptions. La table doit �galement comprendre les �tudiants qui ne sont inscrits dans aucun cours
SELECT * FROM etudiant
LEFT JOIN inscription ON etudiant.sid = inscription.sid;
--8) (1 point) Retourner l'info des �tudiants qui ne sont inscrits � aucun cours - Utilisez une sousrequ�te
SELECT * FROM (
	SELECT * FROM etudiant
	LEFT JOIN inscription ON etudiant.sid = inscription.sid
) AS foo
WHERE foo.cno IS NULL;
--9) (1 point) Imprimer les informations des cours qui parlent de g�om�trie (toutes les combinaisons de titres possibles) 
SELECT * FROM cours
WHERE LOWER(cnom) LIKE '%geometrie%';
--10) (1 point) Imprimer le nom des �tudiants qui suivent un cours de g�om�trie (toutes les combinaisons de titres possibles)
SELECT e.sid, e.snom, e.sexe, e.age, e.moyenne
FROM cours c, etudiant e, inscription i
WHERE i.sid=e.sid AND i.cno = c.cno AND LOWER(cnom) LIKE '%geometrie%';
--11) (1 point) Imprimer le nom des �tudiants qui sont inscrits � au moins un cours du d�partement GIGL et au moins un cours du d�partement de math�matiques - Utilisez INTERSECT
SELECT snom FROM etudiant e, inscription i, cours c 
WHERE e.sid = i.sid AND
c.cno = i.cno AND
c.dep = 'gigl'
INTERSECT
SELECT snom FROM etudiant e, inscription i, cours c 
WHERE e.sid = i.sid AND
c.cno = i.cno AND
c.dep = 'Maths';
--12) (1 point) Imprimer le nom des �tudiants qui suivent un cours du d�partement GIGL OU un cours du d�partement de math�matiques
SELECT snom FROM etudiant e, inscription i, cours c
FULL JOIN (SELECT snom, etudiant.sid FROM etudiant, inscription i, cours c 
WHERE etudiant.sid = i.sid AND
c.cno = i.cno AND
c.dep = 'Maths') B ON e.sid = b.sid
WHERE e.sid = i.sid AND
c.cno = i.cno AND
c.dep = 'gigl';
--13) (1 point) Quelle est la diff�rence d'�ge entre le plus vieux et le plus jeune �tudiant ? Affichez le r�sultat dans une colonne nomm�e Difference
SELECT MAX(age)-MIN(age) difference from Etudiant;
--14) (1 point) Quel est le nombre d'�tudiants dont la moyenne est sup�rieure � la moyenne de tous les �tudiants ?
SELECT count(*) from etudiant e
WHERE CAST(e.moyenne AS NUMERIC) > (SELECT AVG(CAST(moyenne AS NUMERIC)) FROM etudiant);
--15) (1 point) Quels sont le ou les �tudiants avec la plus grande moyenne ? Affichez le nom des �tudiants et leur moyenne 
SELECT * from etudiant e
WHERE CAST(e.moyenne AS NUMERIC) = (SELECT MAX(CAST(moyenne AS NUMERIC)) FROM etudiant);