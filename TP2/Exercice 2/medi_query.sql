SELECT * FROM MEDIDB.Doctor;

SELECT * FROM MEDIDB.Payment JOIN MEDIDB.Patient USING(patientNo);

SELECT * FROM MEDIDB.Appointment WHERE doctorId = 'D001';

SELECT * FROM MEDIDB.Specialist JOIN MEDIDB.Doctor USING(doctorId);

SELECT patientName, dob FROM MEDIDB.Patient;