'use strict';

let title;
let screens;
let screensPrice;
let adaptive;
let service1;
let service2;
let rollback = 32;
let fullPrice;
let servicePercentPrice;
let allServicePrices;


// lesson05 
// ввод только числа(защита)
const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

// функция вопроса клиенту
const asking = function () {
    title = prompt("Как называется ваш проект?", "Напишите название вашего проекта!");
    screens = prompt("Какие типы экранов нужно разработать?", "Простой, сложный или интерактивный!");

    do {
        screensPrice = +prompt("Сколько будет стоить данная работа?", "Укажите цену!");
    }
    while (!isNumber(screensPrice));   //ввод только числа(защита)


    adaptive = confirm("Нужен ли адаптив на сайте?");
};

// функция название и стоимость дополнительных услуг
const getAllServicePrices = function () {
    let sum = 0;
    let price = 0;
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?", "Назваие!");
        } else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?", "Назваие!");
        }

        do {
            sum = prompt("Сколько это будет стоить?", "Укажите цену!");
        }
        while (!isNumber(sum));

        price += +sum;
    }
    return price;

};


// lesson04 

// функция указывающую тип операнда 
const showTypeof = function (variable) {
    console.log(variable, typeof variable);
};

// функция возвращает сумму всех дополнительных услуг 
/*let getAllServicePrices = function () { 
    return servicePrice1 + servicePrice2; 
 
}; 
*/

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
    return Math.ceil(fullPrice - (fullPrice * (rollback / 100)));
};

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



// переопределение переменных в функции 
asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrise(screensPrice, allServicePrices);
title = getTitle(title);
servicePercentPrice = getServicePercentPrices();

// вызовы функции showTypeOf 
showTypeof(screens);
showTypeof(screensPrice);
showTypeof(getRollbackMessage(fullPrice));
showTypeof(servicePercentPrice);

// console.log 
console.log("allServicePrices", allServicePrices);
console.log(screens);
console.log(screensPrice);
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);