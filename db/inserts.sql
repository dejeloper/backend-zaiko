-- Insertar datos de ejemplo en la tabla "TypesDocument"
INSERT INTO public."TypesDocument" ("Name", "ShortName")
VALUES ('Cédula de Ciudadanía', 'CC'),
       ('Pasaporte', 'PSP'),
       ('Cédula de Extranjería', 'CE'),
       ('Tarjeta de Identidad', 'TI'),
       ('Registro Civil', 'RC');
 
-- Insertar datos de ejemplo en la tabla "StatesPersons"
INSERT INTO public."StatesPersons" ("Name")
VALUES ('Invisible'),
       ('Activo'),
       ('Pendiente Activación'),
       ('Inactivo Temporal'),
       ('Bloqueado');

-- Insertar datos de ejemplo en la tabla "StatesUsers"
INSERT INTO public."StatesUsers" ("Name")
VALUES ('Invisible'),
       ('Activo'),
       ('Pendiente Activación'),
       ('Inactivo Temporal'),
       ('Bloqueado');


-- Insertar datos de ejemplo en la tabla "Persons"
INSERT INTO public."Persons" ("Name", "LastName", "DocumentType", "DocumentNumber", "DateBirthday", "State")
VALUES ('Admin', 'Administrador', 1001, 123456789, '1980-01-01', 1000),
       ('John', 'Doe', 1001, 987654321, '1990-05-15', 1001),
       ('Jane', 'Smith', 1001, 567890123, '1985-09-20', 1001),
       ('Michael', 'Johnson', 1001, 234567890, '1982-07-10', 1001),
       ('Sarah', 'Williams', 1001, 654321987, '1995-03-25', 1001),
       ('David', 'Brown', 1001, 901234567, '1988-11-30', 1001);


SELECT * FROM public."Persons";