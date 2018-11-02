-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 02, 2018 at 10:42 AM
-- Server version: 5.7.24
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rrrunsjl_main`
--

-- --------------------------------------------------------

--
-- Table structure for table `beneficiary`
--

CREATE TABLE `beneficiary` (
  `beneficiaryId` varchar(225) NOT NULL,
  `name` varchar(100) NOT NULL,
  `surname` varchar(100) NOT NULL,
  `idnumber` varchar(25) NOT NULL,
  `type` varchar(100) NOT NULL,
  `createdate` datetime NOT NULL,
  `ModifyUserId` varchar(225) NOT NULL,
  `ModifyDate` datetime NOT NULL,
  `CreateUserId` varchar(225) NOT NULL,
  `UserId` varchar(225) NOT NULL,
  `StatusId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `beneficiary`
--

INSERT INTO `beneficiary` (`beneficiaryId`, `name`, `surname`, `idnumber`, `type`, `createdate`, `ModifyUserId`, `ModifyDate`, `CreateUserId`, `UserId`, `StatusId`) VALUES
('b95b3a64-dc12-11e8-925e-0050569f1ec7', 'Petros Mzonjani', 'Biyela', '6211185770085', 'Spouse', '2018-10-30 09:09:21', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '2018-10-30 09:09:21', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '0adb31cd-dc11-11e8-925e-0050569f1ec7', 1),
('36c06073-dc13-11e8-925e-0050569f1ec7', 'Elvis Mzwakhe', 'Biyela', '8305135627086', 'Child', '2018-10-30 09:12:51', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '2018-10-30 09:12:51', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '0adb31cd-dc11-11e8-925e-0050569f1ec7', 1),
('9d666fdd-dc13-11e8-925e-0050569f1ec7', 'Nokukhanya M', 'Biyela', '850911', 'Child', '2018-10-30 09:15:43', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '2018-10-30 09:15:43', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '0adb31cd-dc11-11e8-925e-0050569f1ec7', 1),
('d50a16db-dc13-11e8-925e-0050569f1ec7', 'Siphesihle N', 'Biyela', '890426', 'Child', '2018-10-30 09:17:17', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '2018-10-30 09:17:17', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '0adb31cd-dc11-11e8-925e-0050569f1ec7', 1),
('05ce6438-dc14-11e8-925e-0050569f1ec7', 'Nokuvela D', 'Biyela', '910903', 'Child', '2018-10-30 09:18:38', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '2018-10-30 09:18:38', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '0adb31cd-dc11-11e8-925e-0050569f1ec7', 1),
('894bc564-dc14-11e8-925e-0050569f1ec7', 'Velemseni D', 'Biyela', '9109030', 'Child', '2018-10-30 09:22:19', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '2018-10-30 09:22:19', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '0adb31cd-dc11-11e8-925e-0050569f1ec7', 1),
('b87b9bd0-dc14-11e8-925e-0050569f1ec7', 'Nomvuselelo A', 'Biyela', '990409', 'Child', '2018-10-30 09:23:38', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '2018-10-30 09:23:38', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '0adb31cd-dc11-11e8-925e-0050569f1ec7', 1),
('edca5163-dc14-11e8-925e-0050569f1ec7', 'Nonjabulo A', 'Biyela', '9904090', 'Child', '2018-10-30 09:25:08', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '2018-10-30 09:25:08', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '0adb31cd-dc11-11e8-925e-0050569f1ec7', 1),
('24505bef-dc15-11e8-925e-0050569f1ec7', 'Fanifo Elphas', 'Biyela', '4710245195086', 'Spouse', '2018-10-30 09:26:39', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', '2018-10-30 09:26:39', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', '9c64a5be-dc14-11e8-925e-0050569f1ec7', 1),
('0fcece46-dc16-11e8-925e-0050569f1ec7', 'Phiwayinkosi', 'Biyela', '661104', 'Child', '2018-10-30 09:33:14', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', '2018-10-30 09:33:14', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', '9c64a5be-dc14-11e8-925e-0050569f1ec7', 1),
('54a13321-dc16-11e8-925e-0050569f1ec7', 'Petros m', 'Biyela', '730324', 'Child', '2018-10-30 09:35:10', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', '2018-10-30 09:35:10', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', '9c64a5be-dc14-11e8-925e-0050569f1ec7', 1),
('7cad3f9d-dc16-11e8-925e-0050569f1ec7', 'Thembisile m', 'Biyela', '771102', 'Child', '2018-10-30 09:36:17', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', '2018-10-30 09:36:17', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', '9c64a5be-dc14-11e8-925e-0050569f1ec7', 1),
('c7c963a2-dc16-11e8-925e-0050569f1ec7', 'Ntombifuthi R', 'Biyela', '790629', 'Child', '2018-10-30 09:38:23', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', '2018-10-30 09:38:23', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', '9c64a5be-dc14-11e8-925e-0050569f1ec7', 1),
('349cfd99-dc17-11e8-925e-0050569f1ec7', 'Zibuyisile', 'Biyela ', '860207', 'Child', '2018-10-30 09:41:25', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', '2018-10-30 09:41:25', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', '9c64a5be-dc14-11e8-925e-0050569f1ec7', 1),
('7ca226c3-dc17-11e8-925e-0050569f1ec7', 'Cebo R', 'Biyela', '880910', 'Child', '2018-10-30 09:43:26', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', '2018-10-30 09:43:26', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', '9c64a5be-dc14-11e8-925e-0050569f1ec7', 1),
('9996dc35-dc17-11e8-925e-0050569f1ec7', 'Bhekabona', 'Biyela', '941118', 'Child', '2018-10-30 09:44:15', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', '2018-10-30 09:44:15', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', '9c64a5be-dc14-11e8-925e-0050569f1ec7', 1),
('e89423a4-dc1a-11e8-925e-0050569f1ec7', 'Thembelihle k L', 'Biyela', '981122', 'Child', '2018-10-30 10:07:56', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-30 22:34:46', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '0e0db9b5-dc16-11e8-925e-0050569f1ec7', 1),
('1fc3b1a4-dc1b-11e8-925e-0050569f1ec7', 'Nokuthula P G', 'Biyela', '920703', 'Child', '2018-10-30 10:09:28', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-10-30 10:09:28', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '0e0db9b5-dc16-11e8-925e-0050569f1ec7', 1),
('559f1afa-dc1b-11e8-925e-0050569f1ec7', 'Owethu A', 'Biyela', '30927', 'Child', '2018-10-30 10:10:59', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-10-30 10:10:59', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '0e0db9b5-dc16-11e8-925e-0050569f1ec7', 1),
('805f9e32-dc1b-11e8-925e-0050569f1ec7', 'Asanda A', 'Biyela', '60721', 'Child', '2018-10-30 10:12:11', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-10-30 10:12:11', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '0e0db9b5-dc16-11e8-925e-0050569f1ec7', 1),
('aa4f7ee2-dc1b-11e8-925e-0050569f1ec7', 'Lusanda A', 'Biyela', '160766293086', 'Child', '2018-10-30 10:13:21', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-30 22:35:17', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '0e0db9b5-dc16-11e8-925e-0050569f1ec7', 1),
('7d049c84-dc86-11e8-925e-0050569f1ec7', 'John', 'Mthembu', '9906106565089', 'Child', '2018-10-30 22:58:01', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-30 22:58:26', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '4e11ae3b-dc86-11e8-925e-0050569f1ec7', 1),
('58aae3d4-dcd8-11e8-925e-0050569f1ec7', 'Oscar T', 'Biyela', '781128', 'Child', '2018-10-31 08:43:59', 'e8d0c39a-da86-11e8-925e-0050569f1ec7', '2018-10-31 08:43:59', 'e8d0c39a-da86-11e8-925e-0050569f1ec7', '264666a8-dcd8-11e8-925e-0050569f1ec7', 1),
('799469db-dcd8-11e8-925e-0050569f1ec7', 'Thandeka C', 'Biyela', '801126', 'Child', '2018-10-31 08:44:54', 'e8d0c39a-da86-11e8-925e-0050569f1ec7', '2018-10-31 08:44:54', 'e8d0c39a-da86-11e8-925e-0050569f1ec7', '264666a8-dcd8-11e8-925e-0050569f1ec7', 1),
('ac07ffce-dcd8-11e8-925e-0050569f1ec7', 'Philani M', 'Biyela', '860213', 'Child', '2018-10-31 08:46:19', 'e8d0c39a-da86-11e8-925e-0050569f1ec7', '2018-10-31 08:46:19', 'e8d0c39a-da86-11e8-925e-0050569f1ec7', '264666a8-dcd8-11e8-925e-0050569f1ec7', 1),
('2ab8d5bc-dcd9-11e8-925e-0050569f1ec7', 'Philile', 'Biyela', '8602130', 'Child', '2018-10-31 08:49:51', 'e8d0c39a-da86-11e8-925e-0050569f1ec7', '2018-10-31 08:49:51', 'e8d0c39a-da86-11e8-925e-0050569f1ec7', '264666a8-dcd8-11e8-925e-0050569f1ec7', 1),
('50e04a07-dcd9-11e8-925e-0050569f1ec7', 'Siphelele Y', 'Biyela', '900323', 'Child', '2018-10-31 08:50:55', 'e8d0c39a-da86-11e8-925e-0050569f1ec7', '2018-10-31 08:50:55', 'e8d0c39a-da86-11e8-925e-0050569f1ec7', '264666a8-dcd8-11e8-925e-0050569f1ec7', 1),
('c138031a-dcdd-11e8-925e-0050569f1ec7', 'Senzo M', 'Buthelezi', '9412155494089', 'Child', '2018-10-31 09:22:42', 'e8d0c2a0-da86-11e8-925e-0050569f1ec7', '2018-10-31 09:22:42', 'e8d0c2a0-da86-11e8-925e-0050569f1ec7', '6093e158-dcdd-11e8-925e-0050569f1ec7', 1),
('d13a2181-dcdd-11e8-925e-0050569f1ec7', 'Siyanda D', 'Biyela', '6302215610084', 'Child', '2018-10-31 09:23:09', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '2018-10-31 09:23:09', 'e8d0c142-da86-11e8-925e-0050569f1ec7', 'e6976092-dcdc-11e8-925e-0050569f1ec7', 1),
('e729eccb-dcdd-11e8-925e-0050569f1ec7', 'Vusumuzi N', 'Buthelezi', '9512086048084', 'Child', '2018-10-31 09:23:45', 'e8d0c2a0-da86-11e8-925e-0050569f1ec7', '2018-10-31 09:23:45', 'e8d0c2a0-da86-11e8-925e-0050569f1ec7', '6093e158-dcdd-11e8-925e-0050569f1ec7', 1),
('e9c723f6-dcdd-11e8-925e-0050569f1ec7', 'Jahem Mqalana', 'Buthelezi', '8201013457086', 'Spouse', '2018-10-31 09:23:50', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', '2018-10-31 09:23:50', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', '7fe50b37-dcdd-11e8-925e-0050569f1ec7', 1),
('04d9ee5e-dcde-11e8-925e-0050569f1ec7', 'Nonhlanhla F', 'Biyela', '6506270459084', 'Child', '2018-10-31 09:24:35', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '2018-10-31 09:24:35', 'e8d0c142-da86-11e8-925e-0050569f1ec7', 'e6976092-dcdc-11e8-925e-0050569f1ec7', 1),
('0ce7efbd-dcde-11e8-925e-0050569f1ec7', 'Ndabezinhle I', 'Buthelezi', '103316002080', 'Child', '2018-10-31 09:24:49', 'e8d0c2a0-da86-11e8-925e-0050569f1ec7', '2018-10-31 09:24:49', 'e8d0c2a0-da86-11e8-925e-0050569f1ec7', '6093e158-dcdd-11e8-925e-0050569f1ec7', 1),
('12848b67-dcde-11e8-925e-0050569f1ec7', 'Siziwe T', 'Buthelezi', '8810201152083', 'Child', '2018-10-31 09:24:58', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', '2018-10-31 09:24:58', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', '7fe50b37-dcdd-11e8-925e-0050569f1ec7', 1),
('31146535-dcde-11e8-925e-0050569f1ec7', 'Sithembiso', 'Biyela', '6901270789087', 'Child', '2018-10-31 09:25:49', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '2018-10-31 09:25:49', 'e8d0c142-da86-11e8-925e-0050569f1ec7', 'e6976092-dcdc-11e8-925e-0050569f1ec7', 1),
('39a137b1-dcde-11e8-925e-0050569f1ec7', 'Ayabongwa S', 'Buthelezi', '1404180793088', 'Child', '2018-10-31 09:26:04', 'e8d0c2a0-da86-11e8-925e-0050569f1ec7', '2018-10-31 09:26:04', 'e8d0c2a0-da86-11e8-925e-0050569f1ec7', '6093e158-dcdd-11e8-925e-0050569f1ec7', 1),
('73c1eb8d-dcde-11e8-925e-0050569f1ec7', 'Nkosithandile P', 'Biyela', '6709240418087', 'Child', '2018-10-31 09:27:41', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '2018-10-31 09:27:41', 'e8d0c142-da86-11e8-925e-0050569f1ec7', 'e6976092-dcdc-11e8-925e-0050569f1ec7', 1),
('a52d515b-dcde-11e8-925e-0050569f1ec7', 'Mondli S', 'Biyela', '7310315403085', 'Child', '2018-10-31 09:29:04', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '2018-10-31 09:29:04', 'e8d0c142-da86-11e8-925e-0050569f1ec7', 'e6976092-dcdc-11e8-925e-0050569f1ec7', 1),
('4fb5012d-dcea-11e8-925e-0050569f1ec7', 'Bhekokwakhe', 'Chili', '7210075827087', 'Child', '2018-10-31 10:52:35', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-10-31 10:52:35', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '1ac7ec3c-dcea-11e8-925e-0050569f1ec7', 1),
('874ef06d-dcea-11e8-925e-0050569f1ec7', 'Sebenzile S', 'Chili', '8302230447080', 'Child', '2018-10-31 10:54:08', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-10-31 10:54:08', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '1ac7ec3c-dcea-11e8-925e-0050569f1ec7', 1),
('ad3add1e-dcea-11e8-925e-0050569f1ec7', 'Godblessing', 'Chili', '8509205527080', 'Child', '2018-10-31 10:55:12', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-10-31 10:55:12', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '1ac7ec3c-dcea-11e8-925e-0050569f1ec7', 1),
('cfe8b4e7-dcea-11e8-925e-0050569f1ec7', 'Zanele N', 'Chili', '9010250627080', 'Child', '2018-10-31 10:56:10', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-10-31 10:56:10', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '1ac7ec3c-dcea-11e8-925e-0050569f1ec7', 1),
('102789d8-dceb-11e8-925e-0050569f1ec7', 'Bongokuhle', 'Chili', '101275802086', 'Other', '2018-10-31 10:57:58', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-10-31 10:57:58', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '1ac7ec3c-dcea-11e8-925e-0050569f1ec7', 1),
('4a4f4af1-dceb-11e8-925e-0050569f1ec7', 'Sbongakonke', 'Chili', '802076367084', 'Other', '2018-10-31 10:59:35', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-10-31 10:59:35', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '1ac7ec3c-dcea-11e8-925e-0050569f1ec7', 1),
('5fc10d5f-ddc8-11e8-925e-0050569f1ec7', 'Ntombikayise T', 'BIYELA', '8811260429081', 'Child', '2018-11-01 13:22:10', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '2018-11-01 13:22:10', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '13d50a88-ddc8-11e8-925e-0050569f1ec7', 1),
('ed9a9af3-ddc8-11e8-925e-0050569f1ec7', 'Thandanani', 'Buthelezi', '9112025496088', 'Child', '2018-11-01 13:26:08', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', '2018-11-01 13:26:08', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', 'ab119925-ddc8-11e8-925e-0050569f1ec7', 1),
('02429c12-ddc9-11e8-925e-0050569f1ec7', 'Nothando T', 'Biyela', '9308240519080', 'Child', '2018-11-01 13:26:43', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '2018-11-01 13:26:43', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '13d50a88-ddc8-11e8-925e-0050569f1ec7', 1),
('1d616284-ddc9-11e8-925e-0050569f1ec7', 'Duduzile I', 'Buthelezi', '8909230446084', 'Child', '2018-11-01 13:27:28', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', '2018-11-01 13:27:28', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', 'ab119925-ddc8-11e8-925e-0050569f1ec7', 1),
('3794ad3c-ddc9-11e8-925e-0050569f1ec7', 'Phindile Z', 'Biyela', '9503100500085', 'Child', '2018-11-01 13:28:12', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '2018-11-01 13:28:12', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '13d50a88-ddc8-11e8-925e-0050569f1ec7', 1),
('63ac3a15-ddc9-11e8-925e-0050569f1ec7', 'Lwazi S', 'Biyela', '9206167083', 'Child', '2018-11-01 13:29:26', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '2018-11-01 13:29:26', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '13d50a88-ddc8-11e8-925e-0050569f1ec7', 1),
('6c2fa021-ddc9-11e8-925e-0050569f1ec7', 'Nondumiso Q', 'Buthelezi', '9704100429081', 'Child', '2018-11-01 13:29:40', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', '2018-11-01 13:30:25', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', 'ab119925-ddc8-11e8-925e-0050569f1ec7', 1),
('96979efc-ddc9-11e8-925e-0050569f1ec7', 'Amanda S', 'Biyela', '607171412085', 'Other', '2018-11-01 13:30:51', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '2018-11-01 13:30:51', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '13d50a88-ddc8-11e8-925e-0050569f1ec7', 1),
('b1e11e0d-ddc9-11e8-925e-0050569f1ec7', 'Okuhle M', 'Butheleni', '1104061284088', 'Other', '2018-11-01 13:31:37', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', '2018-11-01 13:31:37', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', 'ab119925-ddc8-11e8-925e-0050569f1ec7', 1),
('b8fcf12b-ddc9-11e8-925e-0050569f1ec7', 'Mthobisi S', 'Biyela', '80921613081', 'Other', '2018-11-01 13:31:49', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '2018-11-01 13:31:49', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '13d50a88-ddc8-11e8-925e-0050569f1ec7', 1),
('018aa703-ddca-11e8-925e-0050569f1ec7', 'Ayanda S', 'Biyela', '1203021174080', 'Other', '2018-11-01 13:33:51', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '2018-11-01 13:33:51', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '13d50a88-ddc8-11e8-925e-0050569f1ec7', 1),
('49205149-ddca-11e8-925e-0050569f1ec7', 'Dorren ', 'Biyela', '3706100181089', 'Other', '2018-11-01 13:35:51', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '2018-11-01 13:35:51', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '13d50a88-ddc8-11e8-925e-0050569f1ec7', 1),
('b7ca59c6-ddca-11e8-925e-0050569f1ec7', 'Busisiwe G', 'Biyela', '8001240262089', 'Child', '2018-11-01 13:38:57', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 13:38:57', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '719439cf-ddca-11e8-925e-0050569f1ec7', 1),
('e3969429-ddca-11e8-925e-0050569f1ec7', 'Lindokuhle P', 'Biyela', '90100655252082', 'Child', '2018-11-01 13:40:10', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 13:40:10', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '719439cf-ddca-11e8-925e-0050569f1ec7', 1),
('10daf729-ddcb-11e8-925e-0050569f1ec7', 'Mandla B', 'Biyela', '7401055497088', 'Child', '2018-11-01 13:41:26', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 13:50:12', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '719439cf-ddca-11e8-925e-0050569f1ec7', 1),
('3cda976c-ddcb-11e8-925e-0050569f1ec7', 'Nkosinathi I', 'Biyela', '761005547083', 'Child', '2018-11-01 13:42:40', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 13:42:40', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '719439cf-ddca-11e8-925e-0050569f1ec7', 1),
('63a07f8c-ddcb-11e8-925e-0050569f1ec7', 'Hopewell L', 'Biyela', '9604015621089', 'Other', '2018-11-01 13:43:45', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 13:43:45', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '719439cf-ddca-11e8-925e-0050569f1ec7', 1),
('8b6d1d36-ddcb-11e8-925e-0050569f1ec7', 'Kwanele A', 'Biyela', '5051606030081', 'Other', '2018-11-01 13:44:52', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 13:44:52', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '719439cf-ddca-11e8-925e-0050569f1ec7', 1),
('b3d86045-ddcb-11e8-925e-0050569f1ec7', 'Nokwanda P', 'Biyela', '97112409020083', 'Other', '2018-11-01 13:46:00', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 13:46:00', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '719439cf-ddca-11e8-925e-0050569f1ec7', 1),
('dc2e208c-ddcb-11e8-925e-0050569f1ec7', 'Zama N', 'Biyela', '6090310084', 'Other', '2018-11-01 13:47:07', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 13:47:07', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '719439cf-ddca-11e8-925e-0050569f1ec7', 1),
('66230774-ddcd-11e8-925e-0050569f1ec7', 'Nonhlanhla N', 'Biyela', '750930', 'Child', '2018-11-01 13:58:08', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 13:58:08', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '27b2a014-ddcd-11e8-925e-0050569f1ec7', 1),
('83310a0b-ddcd-11e8-925e-0050569f1ec7', 'Bonisiwe C', 'Biyela', '811201', 'Child', '2018-11-01 13:58:57', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 13:58:57', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '27b2a014-ddcd-11e8-925e-0050569f1ec7', 1),
('a515d708-ddcd-11e8-925e-0050569f1ec7', 'Thulisisiwe F', 'Biyela', '860116', 'Child', '2018-11-01 13:59:54', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 13:59:54', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '27b2a014-ddcd-11e8-925e-0050569f1ec7', 1),
('cad40740-ddcd-11e8-925e-0050569f1ec7', 'Nqobani L', 'Biyela', '70419', 'Other', '2018-11-01 14:00:57', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 14:00:57', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '27b2a014-ddcd-11e8-925e-0050569f1ec7', 1),
('0f575fad-ddce-11e8-925e-0050569f1ec7', 'Andiswa S', 'Biyela', '70626', 'Other', '2018-11-01 14:02:52', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 14:02:52', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '27b2a014-ddcd-11e8-925e-0050569f1ec7', 1),
('477e0f7e-ddce-11e8-925e-0050569f1ec7', 'Ayabonga O', 'Biyela', '1406091159085', 'Other', '2018-11-01 14:04:26', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 14:04:26', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '27b2a014-ddcd-11e8-925e-0050569f1ec7', 1),
('c640235a-ddcf-11e8-925e-0050569f1ec7', 'Zinhle R', 'Biyela', '740605', 'Child', '2018-11-01 14:15:08', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 14:15:08', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2ea0582b-ddcf-11e8-925e-0050569f1ec7', 1),
('02719983-ddd0-11e8-925e-0050569f1ec7', 'Goodness L', 'Biyela', '750817', 'Child', '2018-11-01 14:16:49', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 14:16:49', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2ea0582b-ddcf-11e8-925e-0050569f1ec7', 1),
('3564eb56-ddd0-11e8-925e-0050569f1ec7', 'Sifiso M', 'Biyela', '790405', 'Child', '2018-11-01 14:18:15', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 14:18:15', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2ea0582b-ddcf-11e8-925e-0050569f1ec7', 1),
('53b03262-ddd0-11e8-925e-0050569f1ec7', 'Thobani W', 'Biyela', '931227', 'Other', '2018-11-01 14:19:06', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 14:19:06', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2ea0582b-ddcf-11e8-925e-0050569f1ec7', 1),
('73d32a47-ddd0-11e8-925e-0050569f1ec7', 'Sinethemba ', 'Biyela', '941226', 'Other', '2018-11-01 14:20:00', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 14:20:00', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2ea0582b-ddcf-11e8-925e-0050569f1ec7', 1),
('8c6e6325-ddd0-11e8-925e-0050569f1ec7', 'Mlondi ', 'Biyela', '980707', 'Other', '2018-11-01 14:20:41', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 14:20:41', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2ea0582b-ddcf-11e8-925e-0050569f1ec7', 1),
('b570c580-ddd0-11e8-925e-0050569f1ec7', 'Nqobani L S', 'Biyela', '20001117', 'Other', '2018-11-01 14:21:50', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 14:24:18', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2ea0582b-ddcf-11e8-925e-0050569f1ec7', 1),
('bf9d96f1-ddd1-11e8-925e-0050569f1ec7', 'Peacefull L', 'Biyela', '7502130707084', 'Child', '2018-11-01 14:29:16', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 14:29:16', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '86c7d53a-ddd1-11e8-925e-0050569f1ec7', 1),
('f10b7a1d-ddd1-11e8-925e-0050569f1ec7', 'Ntobeko B', 'Biyela', '9606275852080', 'Other', '2018-11-01 14:30:39', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 14:30:39', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '86c7d53a-ddd1-11e8-925e-0050569f1ec7', 1),
('1eedc1a9-ddd2-11e8-925e-0050569f1ec7', 'Bongiwe L', 'Biyela', '211300342089', 'Other', '2018-11-01 14:31:56', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 14:31:56', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '86c7d53a-ddd1-11e8-925e-0050569f1ec7', 1),
('3da9edb6-ddd2-11e8-925e-0050569f1ec7', 'Bongumusa B', 'Biyela', '410126057083', 'Other', '2018-11-01 14:32:48', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 14:32:48', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '86c7d53a-ddd1-11e8-925e-0050569f1ec7', 1),
('d53548c4-ddd2-11e8-925e-0050569f1ec7', 'Sfiso', 'Biyela', '771204', 'Child', '2018-11-01 14:37:02', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 14:37:02', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', 'b8fc4e15-ddd2-11e8-925e-0050569f1ec7', 1),
('f8dd78e5-ddd2-11e8-925e-0050569f1ec7', 'Promising S', 'Biyela', '791001', 'Child', '2018-11-01 14:38:02', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 14:38:02', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', 'b8fc4e15-ddd2-11e8-925e-0050569f1ec7', 1),
('1e1d0499-ddd3-11e8-925e-0050569f1ec7', 'Lethukuthula N', 'Biyela', '850828', 'Child', '2018-11-01 14:39:04', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 14:39:04', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', 'b8fc4e15-ddd2-11e8-925e-0050569f1ec7', 1),
('58278cdf-ddd3-11e8-925e-0050569f1ec7', 'Sphamandla', 'Biyela', '901029', 'Child', '2018-11-01 14:40:42', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 14:40:42', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', 'b8fc4e15-ddd2-11e8-925e-0050569f1ec7', 1),
('744a6b73-ddd3-11e8-925e-0050569f1ec7', 'Nolwazi', 'Biyela', '930610', 'Child', '2018-11-01 14:41:29', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 14:41:29', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', 'b8fc4e15-ddd2-11e8-925e-0050569f1ec7', 1),
('9bef4b3e-ddd3-11e8-925e-0050569f1ec7', 'Bandile O', 'Biyela', '1412056333087', 'Other', '2018-11-01 14:42:35', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 14:46:11', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', 'b8fc4e15-ddd2-11e8-925e-0050569f1ec7', 1),
('bf85a47c-ddd3-11e8-925e-0050569f1ec7', 'Lungiswa', 'Biyela', '20010302', 'Other', '2018-11-01 14:43:35', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 14:43:35', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', 'b8fc4e15-ddd2-11e8-925e-0050569f1ec7', 1),
('f39b95ee-ddd3-11e8-925e-0050569f1ec7', 'Qiniso A', 'Biyela', '80301', 'Other', '2018-11-01 14:45:02', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 14:45:02', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', 'b8fc4e15-ddd2-11e8-925e-0050569f1ec7', 1),
('0324f99c-ddd5-11e8-925e-0050569f1ec7', 'Bhekezakhe', 'Biyela', '7603225505084', 'Child', '2018-11-01 14:52:38', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 14:52:38', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', 'cce77843-ddd4-11e8-925e-0050569f1ec7', 1),
('2658b6ff-ddd5-11e8-925e-0050569f1ec7', 'Gugulethu V', 'Biyela', '8810090266085', 'Child', '2018-11-01 14:53:37', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 14:53:37', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', 'cce77843-ddd4-11e8-925e-0050569f1ec7', 1),
('fa727fc0-ddd5-11e8-925e-0050569f1ec7', 'Maria', 'Biyela', '7502060499082', 'Child', '2018-11-01 14:59:33', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 14:59:33', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', 'afdf08a4-ddd5-11e8-925e-0050569f1ec7', 1),
('96f0ef66-ddd6-11e8-925e-0050569f1ec7', 'Themba', 'Biyela', '900726', 'Other', '2018-11-01 15:03:55', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 15:03:55', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', 'afdf08a4-ddd5-11e8-925e-0050569f1ec7', 1),
('dd743cce-ddd6-11e8-925e-0050569f1ec7', 'Sibonelo N', 'Buthelezi', '7803270527088', 'Child', '2018-11-01 15:05:54', 'e8d0c2a0-da86-11e8-925e-0050569f1ec7', '2018-11-01 15:05:54', 'e8d0c2a0-da86-11e8-925e-0050569f1ec7', '59b2144d-ddd6-11e8-925e-0050569f1ec7', 1),
('dff997ec-ddd6-11e8-925e-0050569f1ec7', 'Sandile B', 'Biyela', '950403', 'Other', '2018-11-01 15:05:58', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 15:05:58', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', 'afdf08a4-ddd5-11e8-925e-0050569f1ec7', 1),
('27a6d25c-ddd7-11e8-925e-0050569f1ec7', 'Alicia', 'Naicker', '605311478081', 'Other', '2018-11-01 15:07:58', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 15:07:58', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', 'afdf08a4-ddd5-11e8-925e-0050569f1ec7', 1),
('52cbabbf-ddd7-11e8-925e-0050569f1ec7', 'Zamokuhle A', 'Buthelezi', '8202170967081', 'Child', '2018-11-01 15:09:11', 'e8d0c2a0-da86-11e8-925e-0050569f1ec7', '2018-11-01 15:09:11', 'e8d0c2a0-da86-11e8-925e-0050569f1ec7', '59b2144d-ddd6-11e8-925e-0050569f1ec7', 1),
('b6ccf2bf-ddd7-11e8-925e-0050569f1ec7', 'Sonwabile S', 'Buthelezi', '1302201033080', 'Other', '2018-11-01 15:11:58', 'e8d0c2a0-da86-11e8-925e-0050569f1ec7', '2018-11-01 15:11:58', 'e8d0c2a0-da86-11e8-925e-0050569f1ec7', '59b2144d-ddd6-11e8-925e-0050569f1ec7', 1),
('1ddea6fc-ddd8-11e8-925e-0050569f1ec7', 'Makhosazane B', 'Cele', '6303060454081', 'Child', '2018-11-01 15:14:51', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '2018-11-01 15:14:51', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '7f59a39f-ddd7-11e8-925e-0050569f1ec7', 1),
('67ed7baf-ddd8-11e8-925e-0050569f1ec7', 'Lerato T', 'Buthelezi', '9710130447084', 'Other', '2018-11-01 15:16:56', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', '2018-11-01 15:16:56', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', 'a5e9522f-ddd6-11e8-925e-0050569f1ec7', 1),
('195a9794-ddd9-11e8-925e-0050569f1ec7', 'Norma S', 'Buthelezi', '511050508081', 'Other', '2018-11-01 15:21:53', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', '2018-11-01 15:21:53', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', 'a5e9522f-ddd6-11e8-925e-0050569f1ec7', 1),
('e02f3441-de78-11e8-a50f-0050569f1ec7', 'Lethiwe', 'Khanyile', '00000000000000', 'Grand-Child', '2018-11-02 10:25:37', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-11-02 10:25:37', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', 'e7891721-de6c-11e8-925e-0050569f1ec7', 1);

-- --------------------------------------------------------

--
-- Table structure for table `benefits`
--

CREATE TABLE `benefits` (
  `BenefitId` varchar(225) NOT NULL,
  `Description` varchar(225) NOT NULL,
  `Amount` decimal(10,0) NOT NULL,
  `CreatUserId` varchar(225) NOT NULL,
  `CreateDate` datetime NOT NULL,
  `ModifyUserId` varchar(225) NOT NULL,
  `ModifyDate` datetime NOT NULL,
  `StatusId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `benefits`
--

INSERT INTO `benefits` (`BenefitId`, `Description`, `Amount`, `CreatUserId`, `CreateDate`, `ModifyUserId`, `ModifyDate`, `StatusId`) VALUES
('041e3574-daaa-11e8-925e-0050569f1ec7', 'Collection Of Deceased', '120', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-28 14:07:18', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-30 20:58:11', 1),
('0c822631-daaa-11e8-925e-0050569f1ec7', 'Funeral Goat', '10', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-28 14:07:32', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-28 14:07:32', 1),
('adaed486-daa9-11e8-925e-0050569f1ec7', 'Mortuary Benefit ', '10', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-28 14:04:53', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-28 14:04:53', 1),
('d6344179-daa9-11e8-925e-0050569f1ec7', '2 Pole Tent', '10', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-28 14:06:01', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-28 14:06:01', 1),
('df5a926c-daa9-11e8-925e-0050569f1ec7', '100 Chairs', '10', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-28 14:06:16', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-28 14:06:16', 1),
('f139ace5-daa9-11e8-925e-0050569f1ec7', 'Catering - Starters and Main Meal', '10', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-28 14:06:46', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-28 14:06:46', 1);

-- --------------------------------------------------------

--
-- Table structure for table `callbacks`
--

CREATE TABLE `callbacks` (
  `CallBackId` varchar(225) NOT NULL,
  `Name` varchar(225) NOT NULL,
  `Cellphone` varchar(225) NOT NULL,
  `UserId` varchar(225) NOT NULL,
  `CallDate` datetime NOT NULL,
  `IsCalled` tinyint(1) NOT NULL,
  `StatusId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `callbacks`
--

INSERT INTO `callbacks` (`CallBackId`, `Name`, `Cellphone`, `UserId`, `CallDate`, `IsCalled`, `StatusId`) VALUES
('6bf793ac-ddc9-11e8-925e-0050569f1ec7', 'mpumi.mpanza@isithebe.co.za', '0763641979', ' ', '2018-11-01 13:29:40', 0, 1),
('94c84ddb-dc0d-11e8-925e-0050569f1ec7', 'Sizo Nxumalo', '0789593300', ' ', '2018-10-30 08:32:32', 0, 1),
('c6c8c05a-dc0d-11e8-925e-0050569f1ec7', 'Sizo Nxumalo', '0789593300', ' ', '2018-10-30 08:33:56', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `policies`
--

CREATE TABLE `policies` (
  `PolicyId` varchar(225) NOT NULL,
  `Description` varchar(217) NOT NULL,
  `Amount` decimal(10,0) NOT NULL,
  `CreateUserId` varchar(225) NOT NULL,
  `CreateDate` datetime NOT NULL,
  `ModifyUserId` varchar(225) NOT NULL,
  `ModifyDate` datetime NOT NULL,
  `StatusId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `policies`
--

INSERT INTO `policies` (`PolicyId`, `Description`, `Amount`, `CreateUserId`, `CreateDate`, `ModifyUserId`, `ModifyDate`, `StatusId`) VALUES
('30ef449c-daa8-11e8-925e-0050569f1ec7', 'Isithebe Funeral Plan', '140', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-28 13:54:14', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-30 20:58:58', 1);

-- --------------------------------------------------------

--
-- Table structure for table `policybenefits`
--

CREATE TABLE `policybenefits` (
  `PolicyBenefitId` varchar(225) NOT NULL,
  `PolicyId` varchar(225) NOT NULL,
  `BenefitId` varchar(224) NOT NULL,
  `CreateUserId` varchar(225) NOT NULL,
  `CreateDate` datetime NOT NULL,
  `ModifyUserId` varchar(225) NOT NULL,
  `ModifyDate` datetime NOT NULL,
  `StatusId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `policyholder`
--

CREATE TABLE `policyholder` (
  `PolicyHolderId` varchar(225) NOT NULL,
  `PolicyId` varchar(225) NOT NULL,
  `UserId` varchar(225) NOT NULL,
  `PolicyTypeId` varchar(225) NOT NULL,
  `PolicyName` varchar(225) NOT NULL,
  `SoldDate` datetime NOT NULL,
  `PremiumAmount` decimal(10,0) NOT NULL,
  `CreateUserId` varchar(225) NOT NULL,
  `CreateDate` datetime NOT NULL,
  `ModifyUserId` varchar(225) NOT NULL,
  `ModifyDate` datetime NOT NULL,
  `StatusId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `policyholder`
--

INSERT INTO `policyholder` (`PolicyHolderId`, `PolicyId`, `UserId`, `PolicyTypeId`, `PolicyName`, `SoldDate`, `PremiumAmount`, `CreateUserId`, `CreateDate`, `ModifyUserId`, `ModifyDate`, `StatusId`) VALUES
('0e29c43b-dc76-11e8-925e-0050569f1ec7', '30ef449c-daa8-11e8-925e-0050569f1ec7', '0adb31cd-dc11-11e8-925e-0050569f1ec7', '1', 'Isithebe Funeral Plan', '2018-10-30 21:00:23', '140', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-30 21:00:23', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-30 21:00:23', 1),
('58bff97d-dc83-11e8-925e-0050569f1ec7', '30ef449c-daa8-11e8-925e-0050569f1ec7', '0e0db9b5-dc16-11e8-925e-0050569f1ec7', '1', 'Isithebe Funeral Plan', '2018-10-30 22:35:32', '140', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-30 22:35:32', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-30 22:35:32', 1),
('6adc963a-dc86-11e8-925e-0050569f1ec7', '30ef449c-daa8-11e8-925e-0050569f1ec7', '4e11ae3b-dc86-11e8-925e-0050569f1ec7', '1', 'Isithebe Funeral Plan', '2018-10-30 22:57:31', '140', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-30 22:57:31', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-30 22:57:31', 1),
('99f45609-de77-11e8-a50f-0050569f1ec7', '30ef449c-daa8-11e8-925e-0050569f1ec7', 'e7891721-de6c-11e8-925e-0050569f1ec7', '1', 'Isithebe Funeral Plan', '2018-11-02 10:16:30', '140', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-11-02 10:16:30', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-11-02 10:16:30', 1),
('c837b3e0-dc95-11e8-925e-0050569f1ec7', '30ef449c-daa8-11e8-925e-0050569f1ec7', '9c64a5be-dc14-11e8-925e-0050569f1ec7', '1', 'Isithebe Funeral Plan', '2018-10-31 00:47:30', '140', 'e8d0c2a0-da86-11e8-925e-0050569f1ec7', '2018-10-31 00:47:30', 'e8d0c2a0-da86-11e8-925e-0050569f1ec7', '2018-10-31 00:47:30', 1),
('d6a95cb5-dbb7-11e8-925e-0050569f1ec7', '30ef449c-daa8-11e8-925e-0050569f1ec7', '006256b9-daa8-11e8-925e-0050569f1ec7', '1', 'Isithebe Funeral Plan', '2018-10-29 22:18:46', '140', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-29 22:18:46', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-29 22:18:46', 1);

-- --------------------------------------------------------

--
-- Table structure for table `statuses`
--

CREATE TABLE `statuses` (
  `StatusId` int(11) NOT NULL,
  `Description` varchar(25) NOT NULL,
  `CreateUserId` int(11) NOT NULL,
  `CreateDate` datetime NOT NULL,
  `ModifyUserId` int(11) NOT NULL,
  `ModifyDate` datetime NOT NULL,
  `IsActive` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `FirstName` varchar(150) NOT NULL,
  `Surname` varchar(150) NOT NULL,
  `UserId` varchar(225) NOT NULL COMMENT 'Guid Field',
  `Email` varchar(255) NOT NULL,
  `Password` varchar(225) NOT NULL,
  `ContactNumbers` varchar(15) DEFAULT NULL,
  `AddressLine1` varchar(250) NOT NULL,
  `AddressLine2` varchar(250) DEFAULT NULL,
  `AddressLine3` varchar(250) DEFAULT NULL,
  `City` varchar(250) DEFAULT NULL,
  `PostCode` varchar(50) DEFAULT NULL,
  `IDNumber` varchar(14) NOT NULL,
  `JoiningDate` date DEFAULT NULL,
  `Role` varchar(15) DEFAULT NULL,
  `Token` varchar(225) DEFAULT NULL,
  `Benefactor` varchar(15) DEFAULT NULL,
  `CreateUserId` varchar(225) NOT NULL,
  `CreateDate` datetime NOT NULL,
  `ModifyUserId` varchar(225) NOT NULL,
  `ModifyDate` datetime NOT NULL,
  `StatusId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`FirstName`, `Surname`, `UserId`, `Email`, `Password`, `ContactNumbers`, `AddressLine1`, `AddressLine2`, `AddressLine3`, `City`, `PostCode`, `IDNumber`, `JoiningDate`, `Role`, `Token`, `Benefactor`, `CreateUserId`, `CreateDate`, `ModifyUserId`, `ModifyDate`, `StatusId`) VALUES
('John', 'Test', '006256b9-daa8-11e8-925e-0050569f1ec7', 'freedom.khanyile@ndu-systems.net', 'Password', '0746958064', '56 Jacaranda Lane', '27 Anderson and Berea Street', 'Buskruin', 'Randburg', '2194', '0000000000', '2016-07-07', 'client', NULL, 'na', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-28 13:52:53', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-11-02 10:13:01', 1),
('Bongiwe Joyce', 'Biyela', '0adb31cd-dc11-11e8-925e-0050569f1ec7', 'sizonxumalo@isithebe.co.za', 'Password', '0794480610', 'Mpaphala', 'Kwadaka', 'Showe', 'MANDENI', 'SUNDUMBILI,4491', '6405180493087', NULL, 'client', NULL, 'na', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '2018-10-30 08:57:18', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '2018-10-30 08:57:18', 1),
('Bhekizenzo Caiphas', 'Buthelezi', '0afac8fb-ddda-11e8-925e-0050569f1ec7', '0324592849', 'Password', '0799967155', 'White City', 'Sundumbili', 'Redhill', 'Mandeni', '4490', '4603215542082', NULL, 'client', NULL, 'na', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', '2018-11-01 15:28:39', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', '2018-11-01 15:28:39', 1),
('Andile Terrence', 'Biyela', '0e0db9b5-dc16-11e8-925e-0050569f1ec7', 'mpume.mpamza@isithebe.co.za', 'Password', '0829616761', 'Mhlubulweni', 'Macambini', 'Lambothi', 'Mandini', '4490', '9502045415086', NULL, 'client', NULL, 'na', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-10-30 09:33:11', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-10-30 09:33:11', 1),
('Eunice Duduzile', 'Biyela', '13d50a88-ddc8-11e8-925e-0050569f1ec7', 'nxumalosizo@isithebe.co.za', 'Password', '0764527755', 'MADUNDUBE', 'STANGER', 'SUNDUMBILI', 'MANDENI', '4490', '6708260658085', NULL, 'client', NULL, 'na', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '2018-11-01 13:20:03', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '2018-11-01 13:20:03', 1),
('Fakazile Withness', 'Chili', '1ac7ec3c-dcea-11e8-925e-0050569f1ec7', 'isithebebs612@gmail.com', 'Password', '0792457785', 'Mbizimbelwe', 'Dokodweni', 'Gingindlovu', 'Mandeni', '4491', '7702230710083', NULL, 'client', NULL, 'na', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-10-31 10:51:06', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-10-31 10:51:06', 1),
('Oxwell Mbongeni', 'Biyela', '264666a8-dcd8-11e8-925e-0050569f1ec7', 'nhlanhlazikhali@isithebe.co.za', 'Password', '0762995015', 'NSINGWENI', 'GINGINDLOVU', 'SHOWE', 'MANDENI', '4490', '5406195427087', NULL, 'client', NULL, 'na', 'e8d0c39a-da86-11e8-925e-0050569f1ec7', '2018-10-31 08:42:34', 'e8d0c39a-da86-11e8-925e-0050569f1ec7', '2018-10-31 08:42:34', 1),
('Fezani Getrude', 'Biyela', '27b2a014-ddcd-11e8-925e-0050569f1ec7', 'mpanza.mpume@isithebe.co.za', 'Password', '0731642148', 'Machibini', 'Thulas', 'Matsheketsheni', 'Mandini', '4490', '4907280337082', NULL, 'client', NULL, 'na', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 13:56:23', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 13:56:23', 1),
('Gezephi Doreen', 'Biyela', '2ea0582b-ddcf-11e8-925e-0050569f1ec7', 'mpumempanza@isithebe.co.za', 'Password', '0834676693', 'Mthunzini', 'Nsingweni', 'Banjeni', 'Mandeni', '4490', '5006050691080', NULL, 'client', NULL, 'na', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 14:10:54', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 14:10:54', 1),
('Bheji Grace', 'Buthelezi', '59b2144d-ddd6-11e8-925e-0050569f1ec7', '0829616761', 'Password', '0825312525', 'Cheppies', 'Sundumbili', 'Redhill', 'Mandeni', '4490', '6210020767082', NULL, 'client', NULL, 'na', 'e8d0c2a0-da86-11e8-925e-0050569f1ec7', '2018-11-01 15:02:13', 'e8d0c2a0-da86-11e8-925e-0050569f1ec7', '2018-11-01 15:02:13', 1),
('Bafanyana Vincent', 'Buthelezi', '6093e158-dcdd-11e8-925e-0050569f1ec7', 'nxumaloselby94@gmail.com', 'Password', '0637069900', 'Maphumulo', 'Nhlangwini', 'Maphumulo', 'Mandeni', '4491', '7708085416080', NULL, 'client', NULL, 'na', 'e8d0c2a0-da86-11e8-925e-0050569f1ec7', '2018-10-31 09:20:00', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', '2018-11-01 13:43:35', 1),
('Fikelephi Sibongile', 'Biyela', '719439cf-ddca-11e8-925e-0050569f1ec7', 'mpumi.mpanza@isithebe.co.za', 'Password', '0829616761', 'Shakaville', 'Lindelani', 'Stanger', 'Mandeni', '4490', '6301190504082', NULL, 'client', NULL, 'na', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 13:36:59', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 13:36:59', 1),
('Annastasia Bonisiwe', 'Cele', '7f59a39f-ddd7-11e8-925e-0050569f1ec7', '0324592843', 'Password', '0829616761', 'ENYUNDWINI', 'GROUTVILLE', 'STANGER', 'MANDENI', '4490', '4209060263087', NULL, 'client', NULL, 'na', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '2018-11-01 15:10:25', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '2018-11-01 15:10:25', 1),
('Banumzane Bangokukhulu', 'Buthelezi', '7fe50b37-dcdd-11e8-925e-0050569f1ec7', 'zamamkhize@isithebe.co.za', 'Password', '0792881584', 'Nkunzempunga', 'Ndulinde', 'Nyoni', 'Mandeni ', '4490', '4312315329081', NULL, 'client', NULL, 'na', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', '2018-10-31 09:20:52', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', '2018-10-31 09:20:52', 1),
('Hleziphi Grace', 'Biyela', '86c7d53a-ddd1-11e8-925e-0050569f1ec7', 'mpanzampume@isithebe.co.za', 'Password', '0827311276', 'Ntshawini', 'Melville', 'Stanger', 'Mandeni', '4490', '48022160192089', NULL, 'client', NULL, 'na', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 14:27:41', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 14:27:41', 1),
('Catharine Elizabeth Mantuli', 'Biyela', '9c64a5be-dc14-11e8-925e-0050569f1ec7', 'mpumimpanza94@gmail.com', 'Password', '0764318488', 'po box 4256', 'sundumbili', '4491', 'Nsunduzane', '4491', '4902280419089', NULL, 'client', NULL, 'na', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', '2018-10-30 09:22:51', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', '2018-10-30 09:22:51', 1),
('Bhekayena Jacob', 'Buthelezi', 'a5e9522f-ddd6-11e8-925e-0050569f1ec7', '0827084202', 'Password', '0790415064', 'Nyezane', 'Gingindlovu', 'Obanjeni', 'Mandeni', '4490', '4606085222081', NULL, 'client', NULL, 'na', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', '2018-11-01 15:04:21', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', '2018-11-01 15:04:21', 1),
('Abigail Nomalwandle', 'Buthelezi', 'ab119925-ddc8-11e8-925e-0050569f1ec7', 'mkhizezama@isithebe.co.za', 'Password', '0781829769', 'Maphumulo', 'Nhlangwini', 'Mushane', 'Mandeni', '4490', '5912130829089', NULL, 'client', NULL, 'na', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', '2018-11-01 13:24:16', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', '2018-11-01 13:24:16', 1),
('Maggie Ntombizodwa', 'Biyela', 'afdf08a4-ddd5-11e8-925e-0050569f1ec7', 'mpumi mpanza@isithebe.co.za', 'Password', '0829616761', 'Nqofela', 'Mangethe', 'Macambini', 'Mandeni', '4490', '4201100442086', NULL, 'client', NULL, 'na', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 14:57:28', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 14:57:28', 1),
('Jabulisiwe Nestar', 'Biyela', 'b8fc4e15-ddd2-11e8-925e-0050569f1ec7', 'mpanzampume.isithebe.co.za', 'Password', '0711422413', 'Mgqwabagwaba', 'Groutville', 'Stanger', 'Mandeni', '4490', '5806101143084', NULL, 'client', NULL, 'na', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 14:36:15', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 14:36:15', 1),
('Admin', 'Admin', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', 'admin@isithebe.co.za', 'pass', '075858585', 'Durban', 'Durban', 'Durban', 'Durban', '3001', '805805805858', NULL, 'Admin', '09c98e4a40f2b7b4c96600a589adf889', 'n/a', '1', '2018-09-29 14:25:13', '1', '2018-09-29 14:25:13', 1),
('Kangezile', 'Biyela', 'cce77843-ddd4-11e8-925e-0050569f1ec7', 'mpumimpanza@isithebe.co.za', 'Password', '0835192076', 'Ndulinde', 'Khonkwaneni', 'Nyoni', 'Mandeni', '4490', '2802010275086', NULL, 'client', NULL, 'na', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 14:51:07', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', '2018-11-01 14:51:07', 1),
('Ednah Nikeziwe', 'Biyela', 'e6976092-dcdc-11e8-925e-0050569f1ec7', 'sizonxumalo@co.za', 'Password', '0832420762', 'MASOMONCO', 'ISITHEBE', 'SUNDUMBILI', 'MANDENI', '4490', '3805200242088', NULL, 'client', NULL, 'na', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '2018-10-31 09:16:35', 'e8d0c142-da86-11e8-925e-0050569f1ec7', '2018-10-31 09:16:35', 1),
('Ndu', 'Systems', 'e7891721-de6c-11e8-925e-0050569f1ec7', 'queries@ndu-systems.net', 'Password', '+27658143509', 'G36 Eyethu House 270 Marshall St', 'G36 Eyethu House 270 Marshall St', ' ', 'johannesburg', '2001', '2312131313', '2018-07-05', 'client', NULL, 'na', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-11-02 08:59:55', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-11-02 10:12:28', 1),
('Mpumi', 'Mpanza', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', 'mpume.mpanza@isithebe.co.za', 'mpume.mpanza@isithebe.co.za', '0', '0', '0', '0', 'Isithebe', '3001', '0', NULL, 'Admin', NULL, '0', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-28 09:56:00', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-28 09:56:00', 1),
('Zama', 'Mkhize', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', 'zama.mkhize@isithebe.co.za', 'zama.mkhize@isithebe.co.za', '0', '0', '0', '0', 'Isithebe', '3001', '0', NULL, 'Admin', NULL, '0', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-28 09:56:00', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-28 09:56:00', 1),
('Sizo', 'Nxumalo', 'e8d0c142-da86-11e8-925e-0050569f1ec7', 'sizo.nxumalo@isithebe.co.za', 'sizo.nxumalo@isithebe.co.za', '0', '0', '0', '0', 'Isithebe', '3001', '0', NULL, 'Admin', NULL, '0', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-28 09:56:00', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-28 09:56:00', 1),
('Selby', 'Nxumalo', 'e8d0c2a0-da86-11e8-925e-0050569f1ec7', 'selby.nxumalo@isithebe.co.za', 'selby.nxumalo@isithebe.co.za', '0', '0', '0', '0', 'Isithebe', '3001', '0', NULL, 'Admin', NULL, '0', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-28 09:56:00', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-28 09:56:00', 1),
('Nhlanhla', 'Zikhali', 'e8d0c39a-da86-11e8-925e-0050569f1ec7', 'nhlanhla.zikhali@isithebe.co.za', 'nhlanhla.zikhali@isithebe.co.za', '0', '0', '0', '0', 'Isithebe', '3001', '0', NULL, 'Admin', NULL, '0', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-28 09:56:00', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-28 09:56:00', 1),
('Themba', 'Mchunu', 'e8d0c4ff-da86-11e8-925e-0050569f1ec7', 'themba.mchunu@isithebe.co.za', 'themba.mchunu@isithebe.co.za', '0', '0', '0', '0', 'Isithebe', '3001', '0', NULL, 'Admin', NULL, '0', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-28 09:56:00', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-28 09:56:00', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `benefits`
--
ALTER TABLE `benefits`
  ADD PRIMARY KEY (`BenefitId`),
  ADD KEY `BenefitsIndex` (`BenefitId`) USING HASH;

--
-- Indexes for table `callbacks`
--
ALTER TABLE `callbacks`
  ADD PRIMARY KEY (`CallBackId`);

--
-- Indexes for table `policies`
--
ALTER TABLE `policies`
  ADD PRIMARY KEY (`PolicyId`),
  ADD UNIQUE KEY `PolicyIndex` (`PolicyId`) USING HASH;

--
-- Indexes for table `policybenefits`
--
ALTER TABLE `policybenefits`
  ADD PRIMARY KEY (`PolicyBenefitId`),
  ADD UNIQUE KEY `PolicyBenefitsIndex` (`PolicyBenefitId`) USING HASH;

--
-- Indexes for table `policyholder`
--
ALTER TABLE `policyholder`
  ADD PRIMARY KEY (`PolicyHolderId`),
  ADD UNIQUE KEY `PolicyHolderIndex` (`PolicyHolderId`) USING HASH;

--
-- Indexes for table `statuses`
--
ALTER TABLE `statuses`
  ADD PRIMARY KEY (`StatusId`),
  ADD UNIQUE KEY `StatusesIndex` (`StatusId`) USING BTREE;

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`UserId`),
  ADD UNIQUE KEY `UserIndex` (`UserId`) USING HASH;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `statuses`
--
ALTER TABLE `statuses`
  MODIFY `StatusId` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
