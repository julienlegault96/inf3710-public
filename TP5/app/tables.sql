CREATE TABLE IF NOT EXISTS public.Clinic (
	id SERIAL,
	address VARCHAR(50) NOT NULL,
	phone VARCHAR(20) NOT NULL,
	fax VARCHAR(20) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.Animal (
    id SERIAL,
    clinicId INTEGER NOT NULL,
    name VARCHAR(25) NOT NULL,
    type VARCHAR(25) NOT NULL,
    description VARCHAR(50) NOT NULL,
    birthday DATE NOT NULL,
    registry DATE NOT NULL,
    state VARCHAR(25) NOT NULL,
    PRIMARY KEY (clinicId, id),
    FOREIGN KEY (clinicId) REFERENCES public.Clinic(id)
)

INSERT INTO public.clinic VALUES (DEFAULT, '2900 boulevard Edouard Montepetit', '514 123 1234', '514 123 1234');

INSERT INTO public.Animal VALUES (DEFAULT, 1, 'Charlie', 'Chat', 'Gros', date '2015-08-13', current_date, 'en sante');
