CREATE DATABASE  IF NOT EXISTS `openfood` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `openfood`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: openfood
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cron_executed`
--

DROP TABLE IF EXISTS `cron_executed`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cron_executed` (
  `last_cron` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ingredients`
--

DROP TABLE IF EXISTS `ingredients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ingredients` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_code` varchar(255) DEFAULT NULL,
  `ingredients_text` text,
  `traces` varchar(255) DEFAULT NULL,
  `traces_tags` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_code` (`product_code`),
  CONSTRAINT `ingredients_ibfk_1` FOREIGN KEY (`product_code`) REFERENCES `product` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `misc_data`
--

DROP TABLE IF EXISTS `misc_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `misc_data` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_code` varchar(255) DEFAULT NULL,
  `serving_size` varchar(255) DEFAULT NULL,
  `serving_quantity` varchar(255) DEFAULT NULL,
  `no_nutriments` varchar(255) DEFAULT NULL,
  `additives_n` int DEFAULT NULL,
  `additives` varchar(255) DEFAULT NULL,
  `additives_tags` varchar(255) DEFAULT NULL,
  `ingredients_from_palm_oil_n` int DEFAULT NULL,
  `ingredients_from_palm_oil` varchar(255) DEFAULT NULL,
  `ingredients_from_palm_oil_tags` varchar(255) DEFAULT NULL,
  `ingredients_that_may_be_from_palm_oil_n` int DEFAULT NULL,
  `ingredients_that_may_be_from_palm_oil` varchar(255) DEFAULT NULL,
  `ingredients_that_may_be_from_palm_oil_tags` varchar(255) DEFAULT NULL,
  `nutrition_grade_fr` varchar(1) DEFAULT NULL,
  `main_category` varchar(255) DEFAULT NULL,
  `main_category_fr` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `image_small_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_code` (`product_code`),
  CONSTRAINT `misc_data_ibfk_1` FOREIGN KEY (`product_code`) REFERENCES `product` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tags` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_code` varchar(255) DEFAULT NULL,
  `packaging` varchar(255) DEFAULT NULL,
  `packaging_tags` varchar(255) DEFAULT NULL,
  `brands` varchar(255) DEFAULT NULL,
  `brands_tags` varchar(255) DEFAULT NULL,
  `categories` varchar(255) DEFAULT NULL,
  `categories_tags` varchar(255) DEFAULT NULL,
  `categories_fr` varchar(255) DEFAULT NULL,
  `origins` varchar(255) DEFAULT NULL,
  `origins_tags` varchar(255) DEFAULT NULL,
  `manufacturing_places` varchar(255) DEFAULT NULL,
  `manufacturing_places_tags` varchar(255) DEFAULT NULL,
  `labels` varchar(255) DEFAULT NULL,
  `labels_tags` varchar(255) DEFAULT NULL,
  `labels_fr` varchar(255) DEFAULT NULL,
  `emb_codes` varchar(255) DEFAULT NULL,
  `emb_codes_tags` varchar(255) DEFAULT NULL,
  `first_packaging_code_geo` varchar(255) DEFAULT NULL,
  `cities` varchar(255) DEFAULT NULL,
  `cities_tags` varchar(255) DEFAULT NULL,
  `purchase_places` varchar(255) DEFAULT NULL,
  `stores` varchar(255) DEFAULT NULL,
  `countries` varchar(255) DEFAULT NULL,
  `countries_tags` varchar(255) DEFAULT NULL,
  `countries_en` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `product_code` (`product_code`),
  CONSTRAINT `tags_ibfk_1` FOREIGN KEY (`product_code`) REFERENCES `product` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=7566 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-28  0:31:28
