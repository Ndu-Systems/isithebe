-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 28, 2018 at 01:23 PM
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
('33763756-d873-11e8-9361-80fa5b45280e', 'Sizwe', 'Mzumbu', '2147483647', 'Clild', '2018-10-25 18:29:53', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-25 18:29:53', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '31008929-d20c-11e8-a250-80fa5b45280e', 0),
('93cd3445-d86f-11e8-9361-80fa5b45280e', 'sAS', 'SAsA', '2147483647', 'Spouse', '2018-10-25 18:03:56', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-25 18:03:56', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '31008929-d20c-11e8-a250-80fa5b45280e', 0),
('856b5783-da7d-11e8-925e-0050569f1ec7', 'Freedom', 'Test', '94205778575', 'Spouse', '2018-10-28 08:48:47', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-28 08:48:47', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', 'ee85bb05-d49e-11e8-b24f-f8cab80bdf00', 1);

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
('1fb649d7-d210-11e8-a250-80fa5b45280e', 'More to eat', '150', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00', 1),
('1fb764eb-d210-11e8-a250-80fa5b45280e', 'Transport', '90', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00', 1),
('31d261d1-d360-11e8-9616-f48e38e878a3', 'R200 Airtime', '20', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00', 1),
('9bc24a7d-d4a1-11e8-b24f-f8cab80bdf00', 'Tomb Stone', '120', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-20 21:51:57', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-20 21:54:53', 1);

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
('f0caa759-d46b-11e8-b24f-f8cab80bdf00', 'Themba', '07465858287', ' ', '2018-10-20 15:27:50', 0, 1),
('f6649df2-d386-11e8-abf6-f48e38e878a3', 'freedom khanyile', '0746858064', ' ', '2018-10-19 12:08:44', 0, 1);

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
('39445546-d47f-11e8-b24f-f8cab80bdf00', 'Vuka Nathi', '200', '1', '2018-10-20 17:45:48', '1', '2018-10-20 18:09:02', 0),
('491d4f30-d4a2-11e8-b24f-f8cab80bdf00', 'Themba 2', '201', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-20 21:56:47', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-20 22:01:15', 1),
('5e9a81ef-cf28-11e8-929a-80fa5b45280e', 'Basic Cover Level 2', '32', '1', '2018-10-13 22:41:32', '0', '0000-00-00 00:00:00', 1),
('665b2d03-cf28-11e8-929a-80fa5b45280e', 'seqwe', '3213', '1', '2018-10-13 22:41:45', '0', '0000-00-00 00:00:00', 1);

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

--
-- Dumping data for table `policybenefits`
--

INSERT INTO `policybenefits` (`PolicyBenefitId`, `PolicyId`, `BenefitId`, `CreateUserId`, `CreateDate`, `ModifyUserId`, `ModifyDate`, `StatusId`) VALUES
('157b42d1-d46c-11e8-b24f-f8cab80bdf00', '665b2d03-cf28-11e8-929a-80fa5b45280e', '31d261d1-d360-11e8-9616-f48e38e878a3', '1', '2018-10-20 15:28:51', '0', '0000-00-00 00:00:00', 1),
('1b3cf051-d46c-11e8-b24f-f8cab80bdf00', '665b2d03-cf28-11e8-929a-80fa5b45280e', '1fb764eb-d210-11e8-a250-80fa5b45280e', '1', '2018-10-20 15:29:01', '0', '0000-00-00 00:00:00', 1),
('5e9a81ef-cf28-11e8-929a-80fa5b45241e', '5e9a81ef-cf28-11e8-929a-80fa5b45280e', '1fb649d7-d210-11e8-a250-80fa5b45280e', '1', '2018-10-17 00:00:00', '1', '2018-10-17 00:00:00', 1);

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
('5e9a81ef-cf28-11e8-929a-80fa5b42w34', '5e9a81ef-cf28-11e8-929a-80fa5b45280e', '1036279e-cd79-11e8-870a-80fa5b45280e', '1036279e-cd79-11e8-870a-80fa5b452888', 'Basic Polocy Level 2', '2018-10-17 00:00:00', '250', '1', '2018-10-17 00:00:00', '1', '2018-10-17 00:00:00', 1),
('5eb0ee3f-da7d-11e8-925e-0050569f1ec7', '5e9a81ef-cf28-11e8-929a-80fa5b45280e', 'ee85bb05-d49e-11e8-b24f-f8cab80bdf00', '1', 'Basic Cover Level 2', '2018-10-28 08:47:42', '182', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-28 08:47:42', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-28 08:47:42', 1),
('ffca78bf-d46d-11e8-b24f-f8cab80bdf00', '665b2d03-cf28-11e8-929a-80fa5b45280e', '31008929-d20c-11e8-a250-80fa5b45280e', '1', 'seqwe', '2018-10-20 15:42:34', '3278', '1', '2018-10-20 15:42:34', '0', '0000-00-00 00:00:00', 1);

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

INSERT INTO `users` (`FirstName`, `Surname`, `UserId`, `Email`, `Password`, `ContactNumbers`, `AddressLine1`, `AddressLine2`, `AddressLine3`, `City`, `PostCode`, `IDNumber`, `Role`, `Token`, `Benefactor`, `CreateUserId`, `CreateDate`, `ModifyUserId`, `ModifyDate`, `StatusId`) VALUES
('Ndumiso', 'Mthembu', '1036279e-cd79-11e8-870a-80fa5b45280e', 'queries@ndu-systems.net', 'password', '0658143509', 'G36 Eyethu House 270 Marshall St', 'G36 Eyethu House 270 Marshall St', ' ', 'johannesburg', '2001', '63492634962394', 'client', 'b36998d6c7812b17429d971f33cebf46', 'na', '1', '2018-10-11 19:14:08', '1036279e-cd79-11e8-870a-80fa5b45280e', '2018-10-28 08:55:13', 1),
('Freedom', 'Khanyile', '35b478ff-ca41-11e8-9f20-f8cab80bdf00', 'freedom.khanyile@ndu-systems.net', 'Nduduzo', '044558548', '56 Jacaranda Lane', '33356', '554', 'Randburg', '2194', '927558558785', 'client', 'a126d547329ca2e9ea2af779a28bbe28', 'na', '1', '2018-10-07 16:56:45', '35b478ff-ca41-11e8-9f20-f8cab80bdf00', '2018-10-28 08:12:23', 1),
('Lil Wayne', 'Carter', '9524709a-d49e-11e8-b24f-f8cab80bdf00', 'waynec@ino.vo', 'Password', '055455887', 'New Your', 'GHe', 'BHHg', 'Kings', '2194', '41144774557\\', 'client', NULL, 'na', '0', '2018-10-20 21:30:17', '0', '2018-10-20 21:30:17', 1),
('Admin', 'Admin', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', 'admin@isithebe.co.za', 'pass', '075858585', 'Durban', 'Durban', 'Durban', 'Durban', '3001', '805805805858', 'Admin', '09c98e4a40f2b7b4c96600a589adf889', 'n/a', '1', '2018-09-29 14:25:13', '1', '2018-09-29 14:25:13', 1),
('Mpumi', 'Mpanza', 'e8d0bac8-da86-11e8-925e-0050569f1ec7', 'mpume.mpanza@isithebe.co.za', 'mpume.mpanza@isithebe.co.za', '0', '0', '0', '0', 'Isithebe', '3001', '0', 'Admin', NULL, '0', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-28 09:56:00', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-28 09:56:00', 1),
('Zama', 'Mkhize', 'e8d0bf37-da86-11e8-925e-0050569f1ec7', 'zama.mkhize@isithebe.co.za', 'zama.mkhize@isithebe.co.za', '0', '0', '0', '0', 'Isithebe', '3001', '0', 'Admin', NULL, '0', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-28 09:56:00', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-28 09:56:00', 1),
('Sizo', 'Nxumalo', 'e8d0c142-da86-11e8-925e-0050569f1ec7', 'sizo.nxumalo@isithebe.co.za', 'sizo.nxumalo@isithebe.co.za', '0', '0', '0', '0', 'Isithebe', '3001', '0', 'Admin', NULL, '0', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-28 09:56:00', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-28 09:56:00', 1),
('Selby', 'Nxumalo', 'e8d0c2a0-da86-11e8-925e-0050569f1ec7', 'selby.nxumalo@isithebe.co.za', 'selby.nxumalo@isithebe.co.za', '0', '0', '0', '0', 'Isithebe', '3001', '0', 'Admin', NULL, '0', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-28 09:56:00', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-28 09:56:00', 1),
('Nhlanhla', 'Zikhali', 'e8d0c39a-da86-11e8-925e-0050569f1ec7', 'nhlanhla.zikhali@isithebe.co.za', 'nhlanhla.zikhali@isithebe.co.za', '0', '0', '0', '0', 'Isithebe', '3001', '0', 'Admin', NULL, '0', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-28 09:56:00', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-28 09:56:00', 1),
('Themba', 'Mchunu', 'e8d0c4ff-da86-11e8-925e-0050569f1ec7', 'themba.mchunu@isithebe.co.za', 'themba.mchunu@isithebe.co.za', '0', '0', '0', '0', 'Isithebe', '3001', '0', 'Admin', NULL, '0', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-28 09:56:00', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-28 09:56:00', 1),
('KJacl', 'Laye', 'ee85bb05-d49e-11e8-b24f-f8cab80bdf00', 'neyo-town@mail.com', 'Password', '075654348', 'Make New Edit', 'Nawh', 'Urmankekhe', 'New Your', '62445', '5243785757', 'client', NULL, 'na', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-20 21:32:47', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-20 21:40:48', 1);

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
