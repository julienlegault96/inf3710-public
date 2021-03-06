--CREATE DATABASE medi;

SET search_path = medi;

DROP SCHEMA IF EXISTS MEDIDB CASCADE;
CREATE SCHEMA MEDIDB;

CREATE TABLE IF NOT EXISTS MEDIDB.PATIENT (
	patientNo VARCHAR(10) NOT NULL,
	patientName VARCHAR(20) NOT NULL,
	address VARCHAR(50) NOT NULL,
	phoneNo VARCHAR(20) NOT NULL,
	dob DATE NOT NULL,
	PRIMARY KEY (patientNo)
);

CREATE TABLE IF NOT EXISTS MEDIDB.DOCTOR (
	doctorId VARCHAR(10) NOT NULL,
	doctorName VARCHAR(20) NOT NULL,
	dob DATE NOT NULL,
	address VARCHAR(50) NOT NULL,
	phoneNo VARCHAR(20) NOT NULL,
	salary INTEGER NOT NULL,
	PRIMARY KEY (doctorId),
	CONSTRAINT salary CHECK (salary > 100000)
);

CREATE TABLE IF NOT EXISTS MEDIDB.APPOINTMENT (
	apptNo VARCHAR(10) NOT NULL,
	patientNo VARCHAR(10) NOT NULL,
	doctorId VARCHAR(10) NOT NULL,
	apptDate DATE NOT NULL,
	apptTime TIME NOT NULL,
	PRIMARY KEY (apptNo),
	FOREIGN KEY (patientNo) REFERENCES MEDIDB.PATIENT(patientNo),
	FOREIGN KEY (doctorId) REFERENCES MEDIDB.DOCTOR(doctorId)
);

CREATE TABLE IF NOT EXISTS MEDIDB.MEDICAL (
	doctorId VARCHAR(10) NOT NULL,
	overtimeRate NUMERIC(6, 4) NOT NULL,
	PRIMARY KEY (doctorId),
	FOREIGN KEY (doctorId) REFERENCES MEDIDB.DOCTOR(doctorId)
);

CREATE TABLE IF NOT EXISTS MEDIDB.SPECIALIST (
	doctorId VARCHAR(10) NOT NULL,
	fieldArea VARCHAR(50) NOT NULL,
	PRIMARY KEY (doctorId),
	FOREIGN KEY (doctorId) REFERENCES MEDIDB.DOCTOR(doctorId)
);

CREATE TABLE IF NOT EXISTS MEDIDB.BILL (
	billNo VARCHAR(10) NOT NULL,
	doctorId VARCHAR(10) NOT NULL,
	total NUMERIC(8, 2) NOT NULL,
	PRIMARY KEY (billNo),
	FOREIGN KEY (doctorId) REFERENCES MEDIDB.DOCTOR(doctorId)
	ON DELETE RESTRICT
);

CREATE TABLE IF NOT EXISTS MEDIDB.PAYMENT (
	paymentNo VARCHAR(10) NOT NULL,
	patientNo VARCHAR(10) NOT NULL,
	billNo VARCHAR(10) NOT NULL,
	details VARCHAR(50) NOT NULL,
	paymentMethod VARCHAR(20) NOT NULL,
	PRIMARY KEY (paymentNo),
	FOREIGN KEY (patientNo) REFERENCES MEDIDB.PATIENT(patientNo),
	FOREIGN KEY (billNo) REFERENCES MEDIDB.BILL(billNo)
);

ALTER TABLE MEDIDB.PATIENT ADD COLUMN nas VARCHAR(11) UNIQUE;