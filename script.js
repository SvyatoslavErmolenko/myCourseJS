'use strict';
let title = "lesson02";
console.log(typeof title); // вывод в консоль тип данных
let screens = "Simple, Complex, Interactive";
console.log(screens.length); // вывод в консоль длину строки
console.log(screens.toLocaleLowerCase().split(", ")); // приводит строку к нижнему регистру и разбивает строку на массив
let screensPrice = 182;
console.log("\t The cost of layout screens in RUB:", screensPrice, "\n\t The cost of layout screens in USD:", screensPrice,
    "\n\t The cost of layout screens in UAH:", screensPrice, "\n\t The cost of layout screens in CNY:", screensPrice); // выводит в консоль стоимость верстки: рублей, долларов, гривен, юани
let rollback = 32;
let fullPrice = 548;
console.log(typeof fullPrice); // вывод в консоль тип данных
console.log("\t Cost of website development in RUB:", fullPrice, "\n\t Cost of website development in USD:", fullPrice,
    "\n\t Cost of website development in UAH:", fullPrice, "\n\t Cost of website development in CNY:", fullPrice); // выводит в консоль стоимость разработки сайта: рублей, долларов, гривен, юани
let adaptive = true;
console.log(typeof adaptive); // вывод в консоль тип данных
console.log(fullPrice * (rollback / 100)); // процент отката посреднику

//lesson03
title = prompt("Как называется ваш проект?", "Напишите название вашего проекта!");
console.log(title);

screens = prompt("Какие типы экранов нужно разработать?", "Простой, сложный или интерактивный!");
console.log(screens);

screensPrice = prompt("Сколько будет стоить данная работа?", "Укажите цену!");
console.log(screensPrice);

adaptive = confirm("Нужен ли адаптив на сайте?");
console.log(adaptive);

let service1 = "";
service1 = prompt("Какой дополнительный тип услуги нужен?", "Назваие!");
let servicePrice1 = 1;
servicePrice1 = prompt("Сколько это будет стоить?", "Стоимость!");
console.log(service1, servicePrice1);
let service2 = "";
service2 = prompt("Какой дополнительный тип услуги нужен?", "Назваие!");
let servicePrice2 = 2;
servicePrice2 = prompt("Сколько это будет стоить?", "Стоимость!");
console.log(service2, servicePrice2);

//fullPrice = ;
//console.log(fullPrice);