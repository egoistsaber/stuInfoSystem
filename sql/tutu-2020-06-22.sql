DROP DATABASE IF EXISTS `stu_info_system`;
CREATE DATABASE `stu_info_system`;

USE `stu_info_system`;

#创建学生信息表
DROP TABLE IF EXISTS `student`;

CREATE TABLE `student`(
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` CHAR(50) NOT NULL,
	`gender` CHAR(2) NULL, #f代表女性，m代表男性
	`address` CHAR(50) NULL,
	`class_number` CHAR(50) NULL,
	PRIMARY KEY(`id`) 
)ENGINE=INNODB;

#创建课程表
DROP TABLE IF EXISTS `course`;
CREATE TABLE `course`(
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` CHAR(50) NOT NULL,
	`teacher_name` CHAR(50) NULL,
	`duration` INT NULL,
	PRIMARY KEY(`Id`)
)ENGINE=INNODB;

#课程学生表
DROP TABLE IF EXISTS `stu_course`;
CREATE TABLE `stu_course`(
	`id` INT NOT NULL AUTO_INCREMENT,
	`stu_id` INT NOT NULL,
	`course_id` INT NOT NULL,
	`grade` INT NULL DEFAULT 0,
	PRIMARY KEY(`id`),
	CONSTRAINT `fk_reference_stu` FOREIGN KEY (`stu_id`) REFERENCES `student`(`id`),
	CONSTRAINT `fk_reference_course` FOREIGN KEY (`course_id`) REFERENCES `course`(`id`)
)ENGINE=INNODB;


INSERT INTO `student` VALUES(1,'tutu','m','绿柳山庄','1905');
INSERT INTO `student`(`name`,`gender`,`address`,`class_number`) VALUES ('chacha','f','杏子林','1902');

INSERT INTO `course`(`name`,`teacher_name`,`duration`) VALUES('体育','萧峰',20);
INSERT INTO `course`(`name`,`teacher_name`,`duration`) VALUES('美术','赵敏',22);

INSERT	INTO `stu_course`(`stu_id`,`course_id`,`grade`) VALUES(1,2,80);
INSERT	INTO `stu_course`(`stu_id`,`course_id`,`grade`) VALUES(1,1,70);
INSERT	INTO `stu_course`(`stu_id`,`course_id`,`grade`) VALUES(2,2,80);