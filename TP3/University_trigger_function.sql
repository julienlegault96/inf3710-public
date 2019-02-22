-- 1) Une fonction nbEtudiants en PL/pgSQL qui retourne le nombre total d��tudiants;
CREATE OR REPLACE FUNCTION nbEtudiants()
	RETURNS INTEGER AS $$
	DECLARE nb INTEGER;
	BEGIN
		SELECT COUNT(*) INTO nb FROM Etudiant;
		RETURN nb;
	END;
	$$ LANGUAGE plpgsql;
SELECT nbEtudiants();


-- 2) Un trigger auditGrade qui cr�e un enregistrement dans une table archive
-- Audit. Ce trigger se d�clenche lorsque la note du cours est mise � jour. L�archive devra
-- conserver les informations d�inscription ainsi que la date o� la modification de la note du
-- cours a �t� effectu�e;
CREATE OR REPLACE FUNCTION auditGradeFunc()
RETURNS trigger AS $emp_stamp$
	BEGIN
		CREATE TABLE IF NOT EXISTS Audit (
			id SERIAL,
			sid VARCHAR(10),
			cno VARCHAR(10),
			sectno VARCHAR(10),
			note INTEGER,
			date DATE,
			PRIMARY KEY (id)
		);
		INSERT INTO Audit VALUES (DEFAULT, NEW.sid, NEW.cno, NEW.sectno, NEW.note, current_date);
		RETURN NEW;
	END;
	$emp_stamp$ LANGUAGE plpgsql;
	
CREATE TRIGGER auditGrade
	BEFORE UPDATE ON Inscription
	FOR EACH ROW
	WHEN (OLD.note IS DISTINCT FROM NEW.note)
	EXECUTE PROCEDURE auditGradeFunc();