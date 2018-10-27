-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 20, 2018 at 10:28 PM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.3

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

INSERT INTO `users` (`FirstName`, `Surname`, `UserId`, `Email`, `Password`, `ContactNumbers`, `AddressLine1`, `AddressLine2`, `AddressLine3`, `City`, `PostCode`, `IDNumber`, `Role`, `Benefactor`, `CreateUserId`, `CreateDate`, `ModifyUserId`, `ModifyDate`, `StatusId`) VALUES
('Ndumiso', 'Mthembu', '1036279e-cd79-11e8-870a-80fa5b45280e', 'queries@ndu-systems.net222', 'Password', '0658143509', 'G36 Eyethu House 270 Marshall St', 'G36 Eyethu House 270 Marshall St', ' ', 'johannesburg', '2001', '63492634962394', 'client', 'na', '1', '2018-10-11 19:14:08', '1', '2018-10-11 19:14:08', 1),
('Ndumiso', 'Mthembu', '31008929-d20c-11e8-a250-80fa5b45280e', 'queries@ndu-systems.net2121', 'Password', '+27658143509', 'G36 Eyethu House 270 Marshall St', 'G36 Eyethu House 270 Marshall St', ' Down Town', 'johannesburg', '2001', '90250845856848', 'client', 'na', '1', '2018-10-17 14:57:12', '1', '2018-10-20 17:16:16', 1),
('Freedom', 'Khanyile', '35b478ff-ca41-11e8-9f20-f8cab80bdf00', 'freedom.khanyile@ndu-systems.net', 'Password', '044558548', '56 Jacaranda Lane', '33356', '554', 'Randburg', '2194', '927558558785', 'client', 'na', '1', '2018-10-07 16:56:45', '1', '2018-10-07 16:56:45', 1),
('Lil Wayne', 'Carter', '9524709a-d49e-11e8-b24f-f8cab80bdf00', 'waynec@ino.vo', 'Password', '055455887', 'New Your', 'GHe', 'BHHg', 'Kings', '2194', '41144774557\\', 'client', 'na', '0', '2018-10-20 21:30:17', '0', '2018-10-20 21:30:17', 1),
('Admin', 'Admin', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', 'admin@isithebe.co.za', 'pass', '075858585', 'Durban', 'Durban', 'Durban', 'Durban', '3001', '805805805858', 'Admin', 'n/a', '1', '2018-09-29 14:25:13', '1', '2018-09-29 14:25:13', 1),
('Ndu', 'Systems', 'd695c741-ca5a-11e8-9ca7-80fa5b45280e', 'queries@ndu-systems.net', 'Password', '0658143509', 'G36 Eyethu House 270 Marshall St', 'G36 Eyethu House 270 Marshall St', ' ', 'johannesburg', '2001', '232432', 'client', 'na', '1', '2018-10-07 20:00:09', '1', '2018-10-07 20:00:09', 1),
('KJacl', 'Laye', 'ee85bb05-d49e-11e8-b24f-f8cab80bdf00', 'neyo-town@mail.com', 'Password', '075654348', 'Make New Edit', 'Nawh', 'Urmankekhe', 'New Your', '62445', '5243785757', 'client', 'na', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-20 21:32:47', 'c25cc7c1-c3e2-11e8-909e-f8cab80bdf00', '2018-10-20 21:40:48', 1);

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
