DROP DATABASE IF EXISTS multiCheckout;

create database multiCheckout;

use multiCheckout;

show tables;

create table formData (
  `id` smallint not null auto_increment,
  `name` varchar(40),
  `email` varchar(100),
  `password` varchar(50),
  Primary key(`id`)
)

