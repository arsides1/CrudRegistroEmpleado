-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: global_employee_db
-- ------------------------------------------------------
-- Server version	8.0.35

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
-- Table structure for table `empleados`
--

DROP TABLE IF EXISTS `empleados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empleados` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `primer_apellido` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `segundo_apellido` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `primer_nombre` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `otros_nombre` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pais_id` bigint unsigned NOT NULL,
  `identificacion_tipo_id` bigint unsigned NOT NULL,
  `numero_identificacion` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fecha_ingreso` date NOT NULL,
  `area_id` bigint unsigned NOT NULL,
  `estado` enum('Active') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Active',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `empleados_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleados`
--

LOCK TABLES `empleados` WRITE;
/*!40000 ALTER TABLE `empleados` DISABLE KEYS */;
INSERT INTO `empleados` VALUES (1,'PEREZ','GOMEZ','JUAN','SAAA',1,1,'1234567890','perez.juan@global.com.co','2024-05-01',1,'Active','2024-05-14 11:23:07','2024-05-15 03:03:04'),(2,'PEREZ','MONTOYA','JUANA','PRUEBA',2,2,'1NGFG7890SF','perez.juana@global.com.us','2024-05-06',6,'Active','2024-05-14 11:32:20','2024-05-14 23:45:08'),(5,'SILVA','SILUPU','DANI',NULL,2,1,'1DSQSS890','silva.dani@global.com.us','2024-05-14',1,'Active','2024-05-14 22:48:25','2024-05-14 22:48:25'),(8,'ASDASD','ASDASD','ASDASD','ASDASDAS',1,2,'ASDASD46A54','asdasd.asdasd@global.com.co','2024-05-09',5,'Active','2024-05-15 00:46:13','2024-05-15 01:15:48'),(9,'PEREZ','JURUPE','JUAN','PITER',2,2,'DSADASD4SD65655','perez.juan.2@global.com.us','2024-05-06',5,'Active','2024-05-15 01:15:34','2024-05-15 01:15:34'),(10,'PEREZ','RIVAS','JUAN','PROBANDO',2,4,'465SD4F654SD6F4','perez.juan.3@global.com.us','2024-05-09',3,'Active','2024-05-15 01:16:22','2024-05-15 01:16:22'),(11,'VALVERDE','JUAREZ','JUAN','SEGUNDO',1,3,'A54DAS5D454ASD','valverde.juan@global.com.co','2024-05-09',3,'Active','2024-05-15 01:17:04','2024-05-15 01:17:04'),(12,'NASKJHD','GDFG','ASDAS','DFGDF',1,2,'GDFGDFGDF354G','naskjhd.asdas@global.com.co','2024-05-04',6,'Active','2024-05-15 01:17:24','2024-05-15 01:17:51'),(13,'GFDGDF','FGHFGHFG','FGHFGH','DFGDFG',1,4,'6S8F46A4F6AS4F','gfdgdf.fghfgh@global.com.co','2024-05-08',6,'Active','2024-05-15 01:22:08','2024-05-15 01:22:08'),(14,'HJKGJHK','FHFGHFG','HFGHFG','HJGJGHJ',1,3,'FGHSF546SD4','hjkgjhk.hfghfg@global.com.co','2024-05-04',5,'Active','2024-05-15 01:22:23','2024-05-15 01:22:23'),(15,'TJHUDFGXC','VSDGSV','FSDFSDF','DFGHFGH',1,2,'DSFS6F54621FSD1','tjhudfgxc.fsdfsdf@global.com.co','2024-05-03',6,'Active','2024-05-15 01:22:42','2024-05-15 01:22:42'),(16,'FGJHFGH','FGHFGH','FGHFGHFG','HDGDFGDF',1,3,'FGHFGH654654','fgjhfgh.fghfghfg@global.com.co','2024-05-04',5,'Active','2024-05-15 01:40:17','2024-05-15 01:40:17');
/*!40000 ALTER TABLE `empleados` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-14 17:21:42
