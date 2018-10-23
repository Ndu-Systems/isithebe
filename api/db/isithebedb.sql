-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
<<<<<<< HEAD
-- Generation Time: Oct 23, 2018 at 04:10 PM
-- Server version: 10.1.35-MariaDB
-- PHP Version: 7.2.9
=======
-- Generation Time: Oct 22, 2018 at 05:50 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.1
>>>>>>> 67e48560f67864c3e9b3be1ae25a98f6b583ebb0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `isithebedb`
--

-- --------------------------------------------------------

--
-- Table structure for table `benefits`
--

CREATE TABLE `benefits` (
  `BenefitId` varchar(225) NOT NULL,
  `Description` varchar(225) NOT NULL,
  `Amount` decimal(10,0) NOT NULL,
  `CreateUserId` varchar(225) NOT NULL,
  `CreateDate` datetime NOT NULL,
  `ModifyUserId` varchar(225) NOT NULL,
  `ModifyDate` datetime NOT NULL,
  `StatusId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `benefits`
--

INSERT INTO `benefits` (`BenefitId`, `Description`, `Amount`, `CreateUserId`, `CreateDate`, `ModifyUserId`, `ModifyDate`, `StatusId`) VALUES
('1fb649d7-d210-11e8-a250-80fa5b45280e', 'More to eat', '50', '', '0000-00-00 00:00:00', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-21 20:05:38', 1),
('1fb764eb-d210-11e8-a250-80fa5b45280e', 'Transport', '45', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00', 1),
('31d261d1-d360-11e8-9616-f48e38e878a3', 'R200 Airtime', '20', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00', 1);

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
('5e9a81ef-cf28-11e8-929a-80fa5b45280e', 'Basic Cover Level 2', '32', '1', '2018-10-13 22:41:32', '0', '2018-10-21 20:02:06', 1),
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
('5e9a81ef-cf28-11e8-929a-80fa5b45241e', '5e9a81ef-cf28-11e8-929a-80fa5b45280e', '1fb649d7-d210-11e8-a250-80fa5b45280e', '1', '2018-10-17 00:00:00', '1', '2018-10-17 00:00:00', 1),
('7236ad79-d60f-11e8-8990-80fa5b45280e', '665b2d03-cf28-11e8-929a-80fa5b45280e', '1fb649d7-d210-11e8-a250-80fa5b45280e', '1', '2018-10-22 17:30:29', '0', '0000-00-00 00:00:00', 1),
('a35d92fa-d60f-11e8-8990-80fa5b45280e', '665b2d03-cf28-11e8-929a-80fa5b45280e', '1fb764eb-d210-11e8-a250-80fa5b45280e', '0', '2018-10-22 17:31:51', '0', '0000-00-00 00:00:00', 1),
('a7d53c69-d5c0-11e8-8990-80fa5b45280e', '5e9a81ef-cf28-11e8-929a-80fa5b45280e', '31d261d1-d360-11e8-9616-f48e38e878a3', '1', '2018-10-22 08:06:28', '0', '0000-00-00 00:00:00', 1);

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
('572c5794-d60e-11e8-8990-80fa5b45280e', '5e9a81ef-cf28-11e8-929a-80fa5b45280e', 'e0c1f43a-d534-11e8-b21f-0050569f1ec7', '1', 'Basic Cover Level 2', '2018-10-22 17:22:34', '102', '0', '2018-10-22 17:22:34', '0', '0000-00-00 00:00:00', 1),
('5e9a81ef-cf28-11e8-929a-80fa5b42w34', '5e9a81ef-cf28-11e8-929a-80fa5b45280e', '1036279e-cd79-11e8-870a-80fa5b45280e', '1036279e-cd79-11e8-870a-80fa5b452888', 'Basic Polocy Level 2', '2018-10-17 00:00:00', '250', '1', '2018-10-17 00:00:00', '1', '2018-10-17 00:00:00', 1),
('5f94d361-d60f-11e8-8990-80fa5b45280e', '665b2d03-cf28-11e8-929a-80fa5b45280e', '1036279e-cd79-11e8-870a-80fa5b45280e', '1', 'seqwe', '2018-10-22 17:29:57', '3213', '0', '2018-10-22 17:29:57', '0', '0000-00-00 00:00:00', 1),
('9c5f1b60-d5c0-11e8-8990-80fa5b45280e', '5e9a81ef-cf28-11e8-929a-80fa5b45280e', '31008929-d20c-11e8-a250-80fa5b45280e', '1', 'Basic Cover Level 2', '2018-10-22 08:06:09', '82', '1', '2018-10-22 08:06:09', '0', '0000-00-00 00:00:00', 1);

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
  `UserId` varchar(225) NOT NULL COMMENT 'Guid Field',
  `FirstName` varchar(150) NOT NULL,
  `Surname` varchar(150) NOT NULL,
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

INSERT INTO `users` (`UserId`, `FirstName`, `Surname`, `Email`, `Password`, `ContactNumbers`, `AddressLine1`, `AddressLine2`, `AddressLine3`, `City`, `PostCode`, `IDNumber`, `Role`, `Benefactor`, `CreateUserId`, `CreateDate`, `ModifyUserId`, `ModifyDate`, `StatusId`) VALUES
('1036279e-cd79-11e8-870a-80fa5b45280e', 'Ndumiso', 'Mthembu', 'queries@ndu-systems.net222', 'Password', '0658143509', 'G36 Eyethu House 270 Marshall St', 'G36 Eyethu House 270 Marshall St', ' ', 'johannesburg', '2001', '63492634962394', 'client', 'na', '1', '2018-10-11 19:14:08', '1', '2018-10-11 19:14:08', 1),
('31008929-d20c-11e8-a250-80fa5b45280e', 'Ndu', 'Systems', 'queries@ndu-systems.net2121', 'Password', '+27658143509', 'G36 Eyethu House 270 Marshall St', 'G36 Eyethu House 270 Marshall St', ' News 2nd', 'johannesburg', '2001', '2121', 'client', 'na', '1', '2018-10-17 14:57:12', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-23 16:06:54', 1),
('35b478ff-ca41-11e8-9f20-f8cab80bdf00', 'Freedom', 'Khanyile', 'freedom.khanyile@ndu-systems.net', 'Password', '044558548', '56 Jacaranda Lane', '33356', '554', 'Randburg', '2194', '927558558785', 'client', 'na', '1', '2018-10-07 16:56:45', '1', '2018-10-07 16:56:45', 1),
('c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', 'Admin', 'Admin', 'admin@isithebe.co.za', 'pass', '075858585', 'Durban', 'Durban', 'Durban', 'Durban', '3001', '805805805858', 'Admin', 'n/a', '1', '2018-09-29 14:25:13', '1', '2018-09-29 14:25:13', 1),
('d695c741-ca5a-11e8-9ca7-80fa5b45280e', 'Ndu', 'Systems', 'queries@ndu-systems.net', 'Password', '0658143509', 'G36 Eyethu House 270 Marshall St', 'G36 Eyethu House 270 Marshall St', ' ', 'johannesburg', '2001', '232432', 'client', 'na', '1', '2018-10-07 20:00:09', '1', '2018-10-07 20:00:09', 1);

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
