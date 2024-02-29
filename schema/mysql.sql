CREATE DATABASE IF NOT EXISTS `openFood` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `openFood`;

DROP TABLE IF EXISTS `cron_executed`;
DROP TABLE IF EXISTS `product`;


CREATE TABLE `product` (
  `code` varchar(255) NOT NULL,
  `url` varchar(255) DEFAULT NULL,
  `creator` varchar(255) DEFAULT NULL,
  `created_t` datetime DEFAULT NULL,
  `created_datetime` datetime DEFAULT NULL,
  `last_modified_t` datetime DEFAULT NULL,
  `last_modified_datetime` datetime DEFAULT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `generic_name` varchar(255) DEFAULT NULL,
  `quantity` varchar(255) DEFAULT NULL,
  `status` varchar(50) DEFAULT 'active',
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `cron_executed` (
  `last_cron` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
