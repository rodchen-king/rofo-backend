-- 创建数据库
CREATE DATABASE IF NOT EXISTS rofo DEFAULT CHARSET utf8 COLLATE utf8_general_ci;

USE rofo;

-- 创建分享表
DROP TABLE IF EXISTS share;
CREATE TABLE share (
    `id` INT UNSIGNED AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `author` VARCHAR(40) NOT NULL,
    `share_date` DATE,
    PRIMARY KEY (`id`)
) DEFAULT CHARSET 'UTF8';