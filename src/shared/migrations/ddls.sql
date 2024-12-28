-- Tabela 'user'
CREATE TABLE public."user" (
	id int8 NOT NULL,
	"name" varchar NULL,
	email varchar NULL,
	birth timestamp NULL,
	"password" varchar NULL,
	created_at timestamp DEFAULT now() NULL,
	CONSTRAINT user_pk PRIMARY KEY (id)
);
CREATE UNIQUE INDEX user_id_idx ON public."user" (id);

-- Tabela 'role'
CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

-- Tabela intermediária 'user_roles'
CREATE TABLE user_roles (
    user_id INT NOT NULL,
    role_id INT NOT NULL,
    PRIMARY KEY (user_id, role_id),
    FOREIGN KEY (user_id) REFERENCES "user" (id) ON DELETE CASCADE,
    FOREIGN KEY (role_id) REFERENCES "role" (id) ON DELETE CASCADE
);

INSERT INTO role (name) VALUES ('ADMIN'), ('USER');

INSERT INTO public."user" ("name", email, birth, created_at, id, "password") VALUES('joão', 'joao@meuemail.com', '1995-04-21 00:00:00.000', '2024-12-23 21:51:36.007', 1, '$2b$10$WeiJDtFQbnFR6lYoFCNdaerbvCgsb0/WfPuB2G0jwsMOZgejH/BGm');

insert into user_roles (user_id, role_id) values (1,1);

insert into user_roles (user_id, role_id) values (1,2);