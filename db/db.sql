-- Eliminar tablas existentes si es necesario
DROP TABLE IF EXISTS public."PersonsInfo";
DROP TABLE IF EXISTS public."Users";
DROP TABLE IF EXISTS public."Passwords";
DROP TABLE IF EXISTS public."Persons";
DROP TABLE IF EXISTS public."StatesUsers";
DROP TABLE IF EXISTS public."StatesPersons";
DROP TABLE IF EXISTS public."TypesDocument";

-- Crear secuencias si no existen
DROP SEQUENCE IF EXISTS "TypesDocument_Id_seq";
CREATE SEQUENCE IF NOT EXISTS "TypesDocument_Id_seq" START WITH 1001;

DROP SEQUENCE IF EXISTS "StatesPersons_Id_seq";
CREATE SEQUENCE IF NOT EXISTS "StatesPersons_Id_seq" START WITH 1000; 

DROP SEQUENCE IF EXISTS "StatesUsers_Id_seq";
CREATE SEQUENCE IF NOT EXISTS "StatesUsers_Id_seq" START WITH 1000; 

DROP SEQUENCE IF EXISTS "Persons_Id_seq";
CREATE SEQUENCE IF NOT EXISTS "Persons_Id_seq" START WITH 1000;

DROP SEQUENCE IF EXISTS "Passwords_Id_seq";
CREATE SEQUENCE IF NOT EXISTS "Passwords_Id_seq" START WITH 1000;

DROP SEQUENCE IF EXISTS "Users_Id_seq";
CREATE SEQUENCE IF NOT EXISTS "Users_Id_seq" START WITH 1000;

DROP SEQUENCE IF EXISTS "PersonsInfo_Id_seq";
CREATE SEQUENCE IF NOT EXISTS "PersonsInfo_Id_seq" START WITH 1000;
 
-- Crear tabla TypesDocument
CREATE TABLE IF NOT EXISTS public."TypesDocument"
(
    "Id" integer NOT NULL DEFAULT nextval('"TypesDocument_Id_seq"'::regclass),
    "Name" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "ShortName" character varying(5) COLLATE pg_catalog."default" NOT NULL,
    "Enabled" boolean NOT NULL DEFAULT true,
    "DateCreated" timestamp with time zone DEFAULT current_timestamp,
    "UserCreated" character varying(50) COLLATE pg_catalog."default" DEFAULT 'Admin',
    "DateUpdate" timestamp with time zone,
    "UserUpdate" character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT "TypesDocument_pkey" PRIMARY KEY ("Id")
);

-- Crear tabla StatesPersons
CREATE TABLE IF NOT EXISTS public."StatesPersons"
(
    "Id" integer NOT NULL DEFAULT nextval('"StatesPersons_Id_seq"'::regclass),
    "Name" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "Enabled" boolean NOT NULL DEFAULT true,
    "DateCreated" timestamp with time zone DEFAULT current_timestamp,
    "UserCreated" character varying(50) COLLATE pg_catalog."default" DEFAULT 'Admin',
    "DateUpdate" timestamp with time zone,
    "UserUpdate" character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT "StatesPersons_pkey" PRIMARY KEY ("Id")
);
 
-- Crear tabla StatesUsers
CREATE TABLE IF NOT EXISTS public."StatesUsers"
(
    "Id" integer NOT NULL DEFAULT nextval('"StatesUsers_Id_seq"'::regclass),
    "Name" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "DateCreated" timestamp with time zone DEFAULT current_timestamp,
    "UserCreated" character varying(50) COLLATE pg_catalog."default" DEFAULT 'Admin',
    "DateUpdate" timestamp with time zone,
    "UserUpdate" character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT "StatesUsers_pkey" PRIMARY KEY ("Id")
);

-- Crear tabla Persons con relaciones
CREATE TABLE IF NOT EXISTS public."Persons"
(
    "Id" integer NOT NULL DEFAULT nextval('"Persons_Id_seq"'::regclass),
    "Name" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "LastName" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "DocumentType" integer NOT NULL,
    "DocumentNumber" integer NOT NULL UNIQUE,
    "DateBirthday" date NOT NULL,
    "State" integer NOT NULL,
    "Enabled" boolean NOT NULL DEFAULT true,
    "DateCreated" timestamp with time zone DEFAULT current_timestamp,
    "UserCreated" character varying(50) COLLATE pg_catalog."default" DEFAULT 'Admin',
    "DateUpdate" timestamp with time zone,
    "UserUpdate" character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT "Persons_pkey" PRIMARY KEY ("Id"),
    CONSTRAINT "Persons_DocumentType_fkey" FOREIGN KEY ("DocumentType")
        REFERENCES public."TypesDocument" ("Id") MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE RESTRICT,
    CONSTRAINT "Persons_State_fkey" FOREIGN KEY ("State")
        REFERENCES public."StatesPersons" ("Id") MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);
 
-- Crear tabla Passwords
CREATE TABLE IF NOT EXISTS public."Passwords"
(
    "Id" integer NOT NULL DEFAULT nextval('"Passwords_Id_seq"'::regclass),
    "User" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "Pass" character varying(255) COLLATE pg_catalog."default" NOT NULL,
    "ExpirationDate" date,
    "DateCreated" timestamp with time zone DEFAULT current_timestamp,
    "UserCreated" character varying(50) COLLATE pg_catalog."default" DEFAULT 'Admin',
    "DateUpdate" timestamp with time zone,
    "UserUpdate" character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT "Passwords_pkey" PRIMARY KEY ("Id")
);

-- Crear tabla Users
CREATE TABLE IF NOT EXISTS public."Users"
(
    "Id" integer NOT NULL DEFAULT nextval('"Users_Id_seq"'::regclass),
    "Person" integer NOT NULL,
    "User" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "Password" integer NOT NULL,
    "State" integer NOT NULL,
    "DateCreated" timestamp with time zone DEFAULT current_timestamp,
    "UserCreated" character varying(50) COLLATE pg_catalog."default" DEFAULT 'Admin',
    "DateUpdate" timestamp with time zone,
    "UserUpdate" character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT "Users_pkey" PRIMARY KEY ("Id"),
    CONSTRAINT "Users_Person_fkey" FOREIGN KEY ("Person")
        REFERENCES public."Persons" ("Id") MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE RESTRICT,
    CONSTRAINT "Users_Password_fkey" FOREIGN KEY ("Password")
        REFERENCES public."Passwords" ("Id") MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE RESTRICT,
    CONSTRAINT "Users_State_fkey" FOREIGN KEY ("State")
        REFERENCES public."StatesUsers" ("Id") MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);
 
-- Crear tabla PersonsInfo
CREATE TABLE IF NOT EXISTS public."PersonsInfo"
(
    "Id" integer NOT NULL DEFAULT nextval('"PersonsInfo_Id_seq"'::regclass),
    "Person" integer NOT NULL,
    "Address1" character varying(100) COLLATE pg_catalog."default",
    "Address2" character varying(100) COLLATE pg_catalog."default",
    "Phone1" character varying(20) COLLATE pg_catalog."default",
    "Phone2" character varying(20) COLLATE pg_catalog."default",
    "Email1" character varying(100) COLLATE pg_catalog."default",
    "Email2" character varying(100) COLLATE pg_catalog."default",
    "DateCreated" timestamp with time zone DEFAULT current_timestamp,
    "UserCreated" character varying(50) COLLATE pg_catalog."default" DEFAULT 'Admin',
    "DateUpdate" timestamp with time zone,
    "UserUpdate" character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT "PersonsInfo_pkey" PRIMARY KEY ("Id"),
    CONSTRAINT "PersonsInfo_Person_fkey" FOREIGN KEY ("Person")
        REFERENCES public."Persons" ("Id") MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE RESTRICT
); 