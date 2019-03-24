SET search_path = public;
CREATE TABLE Accounts (
acctID INTEGER NOT NULL PRIMARY KEY,
balance INTEGER NOT NULL,
CONSTRAINT remains_nonnegative CHECK (balance >= 0)
);

--  data
DROP TABLE if EXISTS balancea CASCADE;
DROP TABLE if EXISTS balanceb CASCADE;
DELETE FROM Accounts;
INSERT INTO Accounts (acctID, balance) VALUES (101, 1000);
INSERT INTO Accounts (acctID, balance) VALUES (202, 2000);
SELECT * FROM Accounts;


--Q1 a
-- La deuxième transaction A est mise en attente puisqu'aucun COMMIT n'est effectué 
-- entre les deux begins.
-- TRANSACTION A
\set AUTCOMMIT off
BEGIN;
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
SELECT balance -200 as bal into balancea FROM Accounts WHERE acctID = 101;
SELECT bal FROM balancea;

-- TRANSACTION B
\set AUTCOMMIT off
BEGIN;
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
SELECT balance - 500 as bal into balanceb FROM Accounts WHERE acctID = 101;
SELECT bal from balanceb;

-- TRANSACTION A
\set AUTCOMMIT off
BEGIN;
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
SELECT balance - 500 as bal into balanceb FROM Accounts WHERE acctID = 101;
SELECT bal from balanceb;

-- TRANSACTION B
UPDATE Accounts SET balance = (select bal from balanceb) WHERE acctID = 101;


-- TRANSACTION A
SELECT acctID, balance FROM Accounts WHERE acctID = 101;
COMMIT;

-- TRANSACTION B
SELECT acctID, balance FROM Accounts WHERE acctID = 101;
COMMIT;

--  data
DROP TABLE if EXISTS balancea CASCADE;
DROP TABLE if EXISTS balanceb CASCADE;
DELETE FROM Accounts;
INSERT INTO Accounts (acctID, balance) VALUES (101, 1000);
INSERT INTO Accounts (acctID, balance) VALUES (202, 2000);
SELECT * FROM Accounts;

--- Q1 b
-- Nous avons retirer les variables intermédiaires balanceA et balanceB afin que les transactions
-- s'effectuent sur une seule variable commune. Nous avons plutôt effectué les modifications sur l'attribut 
-- de la table accounts 

-- TRANSACTION A
\set AUTCOMMIT off
BEGIN;
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
update Accounts set balance = balance - 200 where acctID = 101;
SELECT balance FROM Accounts where acctID = 101;
COMMIT;

-- TRANSACTION B
\set AUTCOMMIT off
BEGIN;
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
update Accounts set balance = balance - 500 where acctID = 101;
SELECT balance FROM Accounts where acctID = 101;
COMMIT;

-- TRANSACTION A
\set AUTCOMMIT off
BEGIN;
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
update Accounts set balance = balance - 500 where acctID = 101;
SELECT balance FROM Accounts where acctID = 101;
COMMIT;

-- TRANSACTION A
SELECT acctID, balance FROM Accounts WHERE acctID = 101;

-- TRANSACTION B
SELECT acctID, balance FROM Accounts WHERE acctID = 101;
-- Q2-a
-- Il ne semble pas avoir de problème, la balance des deux comptes est correctement mis à jour.
-- Puisqu'en niveau d'isolation read commited, la session A a acccès aux nouvelles données 
-- des commits de la session B, la session A aura les données à jour. 
--  data
DROP TABLE if EXISTS balancea CASCADE;
DROP TABLE if EXISTS balanceb CASCADE;
DELETE FROM Accounts;
INSERT INTO Accounts (acctID, balance) VALUES (101, 1000);
INSERT INTO Accounts (acctID, balance) VALUES (202, 2000);
SELECT * FROM Accounts;

-- Transaction A
\set AUTCOMMIT off
BEGIN;
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
-- ISOLATION LEVEL REPEATABLE READ;
SELECT * FROM Accounts WHERE balance > 500;

-- Transaction B
\set AUTCOMMIT off
BEGIN;
UPDATE Accounts SET balance = balance - 500 WHERE acctID = 101;
UPDATE Accounts SET balance = balance + 500 WHERE acctID = 202;
SELECT * FROM Accounts;
COMMIT;

-- Transaction A
SELECT * FROM Accounts WHERE balance > 500;

-- Q2-b
-- Puisqu'en niveau d'isolation repeatable read, la session A est isolé 
-- des commits de la session B, la session A aura toujours les mêmes données. 

--  data
DROP TABLE if EXISTS balancea CASCADE;
DROP TABLE if EXISTS balanceb CASCADE;
DELETE FROM Accounts;
INSERT INTO Accounts (acctID, balance) VALUES (101, 1000);
INSERT INTO Accounts (acctID, balance) VALUES (202, 2000);
SELECT * FROM Accounts;

-- Transaction A
\set AUTCOMMIT off
BEGIN;
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
-- ISOLATION LEVEL READ COMMITTED;
SELECT * FROM Accounts WHERE balance > 500;

-- Transaction B
\set AUTCOMMIT off
BEGIN;
UPDATE Accounts SET balance = balance - 500 WHERE acctID = 101;
UPDATE Accounts SET balance = balance + 500 WHERE acctID = 202;
SELECT * FROM Accounts;
COMMIT;

-- Transaction A
SELECT * FROM Accounts WHERE balance > 500;

--- Q2-c 
-- Puisque le niveau d'isolation est en repeatable read, la session A ne
-- voit pas les nouvelles données de la session B. De plus, 
-- La session B ne fait aucun commits ce qui empêcherait la session A de voir les ajouts 
-- même en niveau d'isolation read commited. 

--  data
DROP TABLE if EXISTS balancea CASCADE;
DROP TABLE if EXISTS balanceb CASCADE;
DELETE FROM Accounts;
INSERT INTO Accounts (acctID, balance) VALUES (101, 1000);
INSERT INTO Accounts (acctID, balance) VALUES (202, 2000);
SELECT * FROM Accounts;

-- Transaction A
\set AUTCOMMIT off
BEGIN;
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ READ ONLY;

-- Transaction B
\set AUTCOMMIT off
BEGIN;
INSERT INTO Accounts (acctID, balance) VALUES (301,3000);

-- Transaction A
SELECT * FROM Accounts WHERE balance > 1000;

-- Transaction B
INSERT INTO Accounts (acctID, balance) VALUES (302,3000);

-- Transaction A
SELECT * FROM Accounts WHERE balance > 1000;
COMMIT;

-- Q3- Deadlock

--- Transaction A
\set AUTCOMMIT off
BEGIN;
SELECT * FROM Accounts WHERE acctID = 101 FOR UPDATE;

-- Transaction B
\set AUTCOMMIT off
BEGIN;
SELECT * FROM Accounts WHERE acctID = 202 FOR UPDATE;

--- Transaction A
UPDATE Accounts SET balance = balance - 500 WHERE acctID = 202;

--- Transaction B
UPDATE Accounts SET balance = balance - 500 WHERE acctID = 101;
