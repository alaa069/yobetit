-- Created by Alaa BEN JABALLAH

-- phpMyAdmin SQL Dump
-- version 4.7.2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le :  lun. 13 nov. 2017 à 18:17
-- Version du serveur :  5.6.35
-- Version de PHP :  7.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données :  `yobetit`
--

-- --------------------------------------------------------

--
-- Structure de la table `Casino`
--

CREATE TABLE `Casino` (
  `ID_casino` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Casino`
--

INSERT INTO `Casino` (`ID_casino`) VALUES
(1);

-- --------------------------------------------------------

--
-- Structure de la table `Countries`
--

CREATE TABLE `Countries` (
  `ID_country` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Countries`
--

INSERT INTO `Countries` (`ID_country`) VALUES
(1),
(2);

-- --------------------------------------------------------

--
-- Structure de la table `Designation`
--

CREATE TABLE `Designation` (
  `ID_player` int(11) NOT NULL,
  `ID_country` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Designation`
--

INSERT INTO `Designation` (`ID_player`, `ID_country`) VALUES
(1, 1),
(3, 1),
(5, 1),
(2, 2),
(4, 2),
(6, 2);

-- --------------------------------------------------------

--
-- Structure de la table `Favorite`
--

CREATE TABLE `Favorite` (
  `ID_game` int(11) NOT NULL,
  `ID_player` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Favorite`
--

INSERT INTO `Favorite` (`ID_game`, `ID_player`) VALUES
(1, 1),
(1, 2),
(2, 3),
(2, 4),
(2, 5),
(1, 6);

-- --------------------------------------------------------

--
-- Structure de la table `Games`
--

CREATE TABLE `Games` (
  `ID_game` int(11) NOT NULL,
  `type_game` varchar(50) NOT NULL,
  `ID_casion` int(11) NOT NULL,
  `ID_country` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Games`
--

INSERT INTO `Games` (`ID_game`, `type_game`, `ID_casion`, `ID_country`) VALUES
(1, 'SLOT', 1, 2),
(2, 'TOLS', 1, 2);

-- --------------------------------------------------------

--
-- Structure de la table `Players`
--

CREATE TABLE `Players` (
  `ID_player` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Players`
--

INSERT INTO `Players` (`ID_player`, `Name`) VALUES
(1, 'aa'),
(2, 'bb'),
(3, 'cc'),
(4, 'dd'),
(5, 'ee'),
(6, 'ff');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Casino`
--
ALTER TABLE `Casino`
  ADD PRIMARY KEY (`ID_casino`);

--
-- Index pour la table `Countries`
--
ALTER TABLE `Countries`
  ADD PRIMARY KEY (`ID_country`);

--
-- Index pour la table `Designation`
--
ALTER TABLE `Designation`
  ADD PRIMARY KEY (`ID_player`,`ID_country`),
  ADD KEY `Countries_Designation` (`ID_country`);

--
-- Index pour la table `Favorite`
--
ALTER TABLE `Favorite`
  ADD PRIMARY KEY (`ID_game`,`ID_player`),
  ADD KEY `Favorite_Players` (`ID_player`);

--
-- Index pour la table `Games`
--
ALTER TABLE `Games`
  ADD PRIMARY KEY (`ID_game`),
  ADD KEY `Games_Casino` (`ID_casion`),
  ADD KEY `Games_Countries` (`ID_country`);

--
-- Index pour la table `Players`
--
ALTER TABLE `Players`
  ADD PRIMARY KEY (`ID_player`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Casino`
--
ALTER TABLE `Casino`
  MODIFY `ID_casino` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `Countries`
--
ALTER TABLE `Countries`
  MODIFY `ID_country` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `Games`
--
ALTER TABLE `Games`
  MODIFY `ID_game` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `Players`
--
ALTER TABLE `Players`
  MODIFY `ID_player` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `Designation`
--
ALTER TABLE `Designation`
  ADD CONSTRAINT `Countries_Designation` FOREIGN KEY (`ID_country`) REFERENCES `Countries` (`ID_country`),
  ADD CONSTRAINT `Designation_Players` FOREIGN KEY (`ID_player`) REFERENCES `Players` (`ID_player`);

--
-- Contraintes pour la table `Favorite`
--
ALTER TABLE `Favorite`
  ADD CONSTRAINT `Favorite_Players` FOREIGN KEY (`ID_player`) REFERENCES `Players` (`ID_player`),
  ADD CONSTRAINT `Games_Favorite` FOREIGN KEY (`ID_game`) REFERENCES `Games` (`ID_game`);

--
-- Contraintes pour la table `Games`
--
ALTER TABLE `Games`
  ADD CONSTRAINT `Games_Casino` FOREIGN KEY (`ID_casion`) REFERENCES `Casino` (`ID_casino`),
  ADD CONSTRAINT `Games_Countries` FOREIGN KEY (`ID_country`) REFERENCES `Countries` (`ID_country`);
