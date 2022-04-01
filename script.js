'use strict';

let title = prompt("Как называется ваш проект?", "Напишите название вашего проекта!");
let screens = prompt("Какие типы экранов нужно разработать?", "Простой, сложный или интерактивный!");
let screensPrice = +prompt("Сколько будет стоить данная работа?", "Укажите цену!");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?", "Назваие!");
let servicePrice1 = +prompt("Сколько это будет стоить?", "Стоимость!");
let service2 = prompt("Какой дополнительный тип услуги нужен?", "Назваие!");
let servicePrice2 = +prompt("Сколько это будет стоить?", "Стоимость!");
let rollback = 32;
let fullPrice = (screensPrice + servicePrice1 + servicePrice2);
let servicePercentPrice = (fullPrice - (fullPrice * (rollback / 100)));
let allServicePrices;

//конструкциия условий
/*switch (true) {
    case cena >= 30000:
        cena === 30000 ? console.log("Даем скидку в 5%") : console.log("Даем скидку в 10%");
        break
    case 15000 <= cena && cena <= 30000:
        cena === 15000 ? console.log("Скидка не предусмотрена") : console.log("Даем скидку в 5%");
        break
    case 15000 >= cena && cena >= 0:
        cena === 0 ? console.log("Скидка не предусмотрена") : console.log("Скидка не предусмотрена");
        break
    default:
        console.log("Что то пошло не так");

}
*/

// функция условий скидок
const getRollbackMessage = function (price) {
    if (price >= 30000) {
        return 'Даем скидку в 10%';
    } else if (15000 <= price && price <= 30000) {
        return 'Даем скидку в 5%';
    } else if (15000 >= price && price >= 0) {
        return ('Скидка не предусмотрена');
    } else {
        return 'Что то пошло не так';
    }

};

// lesson04
// функция указывающую тип операнда
const showTypeof = function (variable) {
    console.log(variable, typeof variable);
};
// функция возвращает сумму всех дополнительных услуг
let getAllServicePrices = function () {
    return servicePrice1 + servicePrice2;

};
// функция возвращает сумму стоимости верстки и стоимости дополнительных услуг
function getFullPrise(screensPrice, allServicePrices) {
    return screensPrice + allServicePrices;
};
// функция возвращает title меняя его таким образом: первый символ с большой буквы, остальные с маленькой с учетом пустых символов 
let getTitle = function (str) {
    return str.trim()[0].toUpperCase() + str.trim().substr(1).toLowerCase(1);

};
// функция возвращает итоговую стоимость за вычетом процента отката
let getServicePercentPrices = function () {
    return fullPrice - servicePercentPrice;
};



// переопределение переменных в функции
allServicePrices = getAllServicePrices();
fullPrice = getFullPrise(screensPrice, allServicePrices);
title = getTitle(title);
servicePercentPrice = getServicePercentPrices();

// вызовы функции showTypeOf
showTypeof(screens);
showTypeof(getRollbackMessage(fullPrice));
showTypeof(servicePercentPrice);

// console.log
console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);