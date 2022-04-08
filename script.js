'use strict';

// lesson07

const appData = {
    title: '',
    screens: '',
    screensPrice: 0,
    adaptive: true,
    service1: '',
    service2: '',
    rollback: 32,
    fullPrice: 0,
    servicePercentPrice: 0,
    allServicePrices: 0,
    asking: function () {
        appData.title = prompt("Как называется ваш проект?", "Напишите название вашего проекта!");
        appData.screens = prompt("Какие типы экранов нужно разработать?", "Простой, сложный или интерактивный!");

        do {
            appData.screensPrice = +prompt("Сколько будет стоить данная работа?", "Укажите цену!");
        }
        while (!appData.isNumber(appData.screensPrice));   //ввод только числа(защита)


        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },

    // ввод только числа(защита)

    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    // функция название и стоимость дополнительных услуг

    getAllServicePrices: function () {
        let sum = 0;
        let price = 0;
        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                appData.service1 = prompt("Какой дополнительный тип услуги нужен?", "Назваие!");
            } else if (i === 1) {
                appData.service2 = prompt("Какой дополнительный тип услуги нужен?", "Назваие!");
            }

            do {
                sum = prompt("Сколько это будет стоить?", "Укажите цену!");
            }
            while (!appData.isNumber(sum));

            price += +sum;
        }
        return price;

    },

    // функция возвращает сумму стоимости верстки и стоимости дополнительных услуг

    getFullPrise: function () {
        return appData.screensPrice + appData.allServicePrices;
    },

    // функция возвращает title меняя его таким образом: первый символ с большой буквы, остальные с маленькой с учетом пустых символов

    getTitle: function (str) {
        return str.trim()[0].toUpperCase() + str.trim().substr(1).toLowerCase(1);

    },

    // функция возвращает итоговую стоимость за вычетом процента отката

    getServicePercentPrices: function () {
        return Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)));
    },

    // функция условий скидок

    getRollbackMessage: function (price) {
        if (price >= 30000) {
            return 'Даем скидку в 10%';
        } else if (15000 <= price && price <= 30000) {
            return 'Даем скидку в 5%';
        } else if (15000 >= price && price >= 0) {
            return ('Скидка не предусмотрена');
        } else {
            return 'Что то пошло не так';
        }

    },

    // выводит все свойства и методы объекта appData

    logger: function () {
        for (let key in appData) {
            if (typeof (appData[key]) === 'object') {
                for (let i in appData[key]) {
                    console.log(`Свойство ${i} имеет значение ${appData[key][i]}`);
                }
            }
            else {
                console.log(`Свойство ${key} имеет значение ${appData[key]}`);
            }
        }
    },

    // переопределение переменных в функции

    start: function () {
        appData.asking();
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = appData.getFullPrise();
        appData.title = appData.getTitle;
        appData.servicePercentPrice = appData.getServicePercentPrices();
        appData.logger();
    },

};

appData.start();