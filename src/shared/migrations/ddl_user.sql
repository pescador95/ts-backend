CREATE TABLE public."user" (
	id int8 NOT NULL,
	"name" varchar NULL,
	email varchar NULL,
	birth timestamp NULL,
	created_at timestamp DEFAULT now() NULL,
	CONSTRAINT user_pk PRIMARY KEY (id)
);
CREATE UNIQUE INDEX user_id_idx ON public."user" (id);