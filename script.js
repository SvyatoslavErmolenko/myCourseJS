'use strict';

let title = prompt("Как называется ваш проект?", "Напишите название вашего проекта!");
let screens = prompt("Какие типы экранов нужно разработать?", "Простой, сложный или интерактивный!");
let screensPrice = prompt("Сколько будет стоить данная работа?", "Укажите цену!");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?", "Назваие!");
let servicePrice1 = prompt("Сколько это будет стоить?", "Стоимость!");
let service2 = prompt("Какой дополнительный тип услуги нужен?", "Назваие!");
let servicePrice2 = prompt("Сколько это будет стоить?", "Стоимость!");
let rollback = 32;
let fullPrice = (+screensPrice + +servicePrice1 + +servicePrice2);
let servicePercentPrice = (fullPrice - (fullPrice * (rollback / 100)));


// конструкцию условий 
switch (true) {
    case fullPrice >= 30000:
        fullPrice === 30000 ? console.log("Не достаточно до скидки `( ") : console.log("Даем скидку в 10%");
        break
    case 15000 <= fullPrice && fullPrice <= 30000:
        fullPrice === 15000 ? console.log("Не достаточно до скидки `( ") : console.log("Даем скидку в 5%");
        break
    case 15000 >= fullPrice && fullPrice >= 0:
        fullPrice === 0 ? console.log("Ну тут совсем мало денюшек ((( ") : console.log("Скидка не предусмотрена");
        break
    default:
        console.log("Что то пошло не так");

}
// lesson04

let getAllServicePrices = function () {
    return +servicePrice1 + +servicePrice2;

};
let allServicePrices = getAllServicePrices();
console.log(allServicePrices);

function getFullPrise(screensPrice, allServicePrices) {
    return +screensPrice + +allServicePrices;
}
fullPrice = getFullPrise(screensPrice, allServicePrices);
console.log(fullPrice);

let getTitle = function (newStr) {
    if (!newStr) return newStr;
    return newStr[0].toUpperCase() + newStr.slice(1);
}
title = getTitle(newStr);
console.log(title);


/*console.log(typeof title); // вывод в консоль тип данных
console.log(screens.length); // вывод в консоль длину строки
console.log(screens.toLocaleLowerCase().split(", ")); // приводит строку к нижнему регистру и разбивает строку на массив
console.log(typeof fullPrice); // вывод в консоль тип данных
console.log("\t Cost of website development in RUB:", fullPrice, "\n\t Cost of website development in USD:", fullPrice,
    "\n\t Cost of website development in UAH:", fullPrice, "\n\t Cost of website development in CNY:", fullPrice); // выводит в консоль стоимость разработки сайта: рублей, долларов, гривен, юани */
console.log(fullPrice * (rollback / 100)); // процент отката посреднику
console.log(Math.ceil(servicePercentPrice));