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

// lesson03

// Спрашиваеn у пользователя о название его проекта
title = prompt("Как называется ваш проект?", "Напишите название вашего проекта!");

// Спрашивает у пользователя о типах экранов
screens = prompt("Какие типы экранов нужно разработать?", "Простой, сложный или интерактивный!");

// Спрашивает у пользователя о цене даннай работы
screensPrice = prompt("Сколько будет стоить данная работа?", "Укажите цену!");

// Спрашивает у пользователя о адаптивности его сайта
adaptive = confirm("Нужен ли адаптив на сайте?");

// Спрашивает у пользователя по 2 раза каждый вопрос и записывает ответы в разные переменные
let service1;
service1 = prompt("Какой дополнительный тип услуги нужен?", "Назваие!");
let servicePrice1;
servicePrice1 = prompt("Сколько это будет стоить?", "Стоимость!");
let service2;
service2 = prompt("Какой дополнительный тип услуги нужен?", "Назваие!");
let servicePrice2;
servicePrice2 = prompt("Сколько это будет стоить?", "Стоимость!");

// вычисление итоговой стоимости работы учитывая стоимость верстки экранов и доп. услуг
fullPrice = (+screensPrice + +servicePrice1 + +servicePrice2);

// итоговая стоимость за вычетом отката посреднику и округление в большую сторону
let servicePercentPrice = (fullPrice - (fullPrice * (rollback / 100)));
console.log(Math.ceil(servicePercentPrice));

// конструкцию условий 
switch (true) {
    case fullPrice >= 30000:
        fullPrice === 30000 ? console.log("Даем скидку в 5%") : console.log("Даем скидку в 10%");
        break
    case 15000 <= fullPrice && fullPrice <= 30000:
        fullPrice === 15000 ? console.log("Скидка не предусмотрена") : console.log("Даем скидку в 5%");
        break
    case 15000 >= fullPrice && fullPrice >= 0:
        fullPrice === 0 ? console.log("Скидка не предусмотрена") : console.log("Скидка не предусмотрена");
        break
    default:
        console.log("Что то пошло не так");

}
