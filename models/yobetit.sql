-- Created by Alaa BEN JABALLAH

-- tables
-- Table: Casino
CREATE TABLE Casino (
    ID_casino int NOT NULL AUTO_INCREMENT,
    CONSTRAINT Casino_pk PRIMARY KEY (ID_casino)
);

-- Table: Countries
CREATE TABLE Countries (
    ID_country int NOT NULL AUTO_INCREMENT,
    CONSTRAINT Countries_pk PRIMARY KEY (ID_country)
);

-- Table: Designation
CREATE TABLE Designation (
    ID_player int NOT NULL,
    ID_country int NOT NULL,
    CONSTRAINT Designation_pk PRIMARY KEY (ID_player,ID_country)
);

-- Table: Favorite
CREATE TABLE Favorite (
    ID_game int NOT NULL,
    ID_player int NOT NULL,
    CONSTRAINT Favorite_pk PRIMARY KEY (ID_game,ID_player)
);

-- Table: Games
CREATE TABLE Games (
    ID_game int NOT NULL AUTO_INCREMENT,
    type_game varchar(50) NOT NULL,
    ID_casion int NOT NULL,
    ID_country int NOT NULL,
    CONSTRAINT Games_pk PRIMARY KEY (ID_game)
);

-- Table: Players
CREATE TABLE Players (
    ID_player int NOT NULL AUTO_INCREMENT,
    CONSTRAINT Players_pk PRIMARY KEY (ID_player)
);

-- foreign keys
-- Reference: Countries_Designation (table: Designation)
ALTER TABLE Designation ADD CONSTRAINT Countries_Designation FOREIGN KEY Countries_Designation (ID_country)
    REFERENCES Countries (ID_country);

-- Reference: Designation_Players (table: Designation)
ALTER TABLE Designation ADD CONSTRAINT Designation_Players FOREIGN KEY Designation_Players (ID_player)
    REFERENCES Players (ID_player);

-- Reference: Favorite_Players (table: Favorite)
ALTER TABLE Favorite ADD CONSTRAINT Favorite_Players FOREIGN KEY Favorite_Players (ID_player)
    REFERENCES Players (ID_player);

-- Reference: Games_Casino (table: Games)
ALTER TABLE Games ADD CONSTRAINT Games_Casino FOREIGN KEY Games_Casino (ID_casion)
    REFERENCES Casino (ID_casino);

-- Reference: Games_Countries (table: Games)
ALTER TABLE Games ADD CONSTRAINT Games_Countries FOREIGN KEY Games_Countries (ID_country)
    REFERENCES Countries (ID_country);

-- Reference: Games_Favorite (table: Favorite)
ALTER TABLE Favorite ADD CONSTRAINT Games_Favorite FOREIGN KEY Games_Favorite (ID_game)
    REFERENCES Games (ID_game);

-- End of file.

