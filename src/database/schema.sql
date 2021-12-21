CREATE DATABASE supermarkethr;

CREATE EXTENSION "uuid-ossp";

CREATE TABLE IF NOT EXISTS products(
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4() PRIMARY KEY,
  barcode VARCHAR NOT NULL,
  name VARCHAR NOT NULL,
  price DECIMAL NOT NULL,
  quantity INT NOT NULL
);

CREATE TABLE IF NOT EXISTS access_level(
  id SERIAL NOT NULL UNIQUE PRIMARY KEY,
  description VARCHAR NOT NULL
);

INSERT INTO access_level(description) VALUES('ADMIN');
INSERT INTO access_level(description) VALUES('STOCKIST');
INSERT INTO access_level(description) VALUES('SELLER');

CREATE TABLE IF NOT EXISTS userss(
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4() PRIMARY KEY,
  id_access_level INT NOT NULL DEFAULT 3,
  name VARCHAR NOT NULL,
  cpf VARCHAR NOT NULL UNIQUE,
  FOREIGN KEY(id_access_level) REFERENCES access_level(id)
);
