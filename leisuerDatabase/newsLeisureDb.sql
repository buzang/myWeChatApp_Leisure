/*
SQLyog Ultimate v12.08 (64 bit)
MySQL - 5.7.26 : Database - leisuredb
*********************************************************************
*/


/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`leisuredb` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `leisuredb`;

/*Table structure for table `goods` */

DROP TABLE IF EXISTS `goods`;

CREATE TABLE `goods` (
  `goods_id` int(11) NOT NULL AUTO_INCREMENT,
  `goods_name` varchar(40) NOT NULL,
  `goods_class` char(4) NOT NULL,
  `goods_details` varchar(100) NOT NULL,
  `goods_price` int(11) NOT NULL,
  `goods_orPrece` int(11) DEFAULT NULL,
  `goods_createDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `goods_method` char(4) DEFAULT NULL,
  `goods_openid` int(11) DEFAULT NULL,
  PRIMARY KEY (`goods_id`),
  KEY `goods_openid` (`goods_openid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `goods` */

/*Table structure for table `goods_images` */

DROP TABLE IF EXISTS `goods_images`;

CREATE TABLE `goods_images` (
  `goodsImages_id` int(11) NOT NULL AUTO_INCREMENT,
  `goodsImages_URL` varchar(255) NOT NULL COMMENT '图片的URL',
  `goods_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`goodsImages_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `goods_images` */

/*Table structure for table `userinfo` */

DROP TABLE IF EXISTS `userinfo`;

CREATE TABLE `userinfo` (
  `user_openid` int(11) NOT NULL COMMENT '用户唯一标识id',
  `user_wxname` varchar(40) NOT NULL COMMENT '用户的微信名',
  `user_city` varchar(20) DEFAULT NULL COMMENT '用户所在的城市',
  `user_province` varchar(20) DEFAULT NULL COMMENT '用户所在的省',
  `user_gender` char(1) NOT NULL COMMENT '用户性别：男1 女2',
  `user_createDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '用户生成的时间（时间戳）',
  `user_releaseid` int(11) DEFAULT NULL COMMENT '用户发布的商品id',
  `user_favoriteid` int(11) DEFAULT NULL COMMENT '用户收藏的商品id',
  `user_phone` char(11) DEFAULT NULL COMMENT '用户的手机号',
  `user_wxid` char(20) DEFAULT NULL COMMENT '用户的微信号',
  PRIMARY KEY (`user_openid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `userinfo` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;