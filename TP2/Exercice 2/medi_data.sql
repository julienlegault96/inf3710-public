INSERT INTO MEDIDB.Doctor VALUES ('D001', 'Kevin', current_date, '123 1er avenue', '4501234567',  100001);
INSERT INTO MEDIDB.Doctor VALUES ('D002', 'Julien', current_date, '456 rue Edouard', '5141234567',  10000000);

INSERT INTO MEDIDB.Patient VALUES ('P001', 'Bob', '63 rue nouvelle', '5149876543', date '1997-08-13');
INSERT INTO MEDIDB.Patient VALUES ('P002', 'Goerge', '27 rue deux', '5147538264', date '1999-04-30');
UPDATE MEDIDB.Patient SET nas = '123456789' WHERE patientNo = 'P001';
UPDATE MEDIDB.Patient SET nas = '987654321' WHERE patientNo = 'P002';

INSERT INTO MEDIDB.Bill VALUES ('B001', 'D002', '1000.00');
INSERT INTO MEDIDB.Bill VALUES ('B002', 'D001', '5000.00');

INSERT INTO MEDIDB.Payment VALUES ('p001', 'P001', 'B001', 'Grosse facture sal€', 'Visa');
INSERT INTO MEDIDB.Payment VALUES ('p002', 'P001', 'B002', 'Facture moins sale', 'Ca$h');

INSERT INTO MEDIDB.Appointment VALUES ('A001', 'P001', 'D001', date '2019-02-10', time '13:15');
INSERT INTO MEDIDB.Appointment VALUES ('A002', 'P001', 'D001', date '2019-02-10', time '13:15');
INSERT INTO MEDIDB.Appointment VALUES ('A003', 'P002', 'D002', date '2019-02-10', time '13:15');

INSERT INTO MEDIDB.Specialist VALUES ('D001', 'Generaliste');
INSERT INTO MEDIDB.Specialist VALUES ('D002', 'Radiologiste');