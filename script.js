'use strict';

// lesson08

const appData = {
    title: '',
    screens: [],
    screensPrice: 0,
    adaptive: true,
    services: {},
    rollback: 32,
    fullPrice: 0,
    servicePercentPrice: 0,
    allServicePrices: 0,

    // запуск методов

    start: function () {
        appData.asking();
        appData.addPrices();
        appData.getFullPrise();
        appData.getTitle();
        appData.getServicePercentPrices();
        appData.logger();
    },

    asking: function () {
        do {
            appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки!");
        }
        while (appData.isNumber(appData.title));
        for (let i = 0; i < 2; i++) {
            let name = prompt("Какие типы экранов нужно разработать?", "Простой, сложный или интерактивный!");
            let price = 0;

            do {
                price = +prompt("Сколько будет стоить данная работа?", "Укажите цену!");
            }
            while (!appData.isNumber(price));

            appData.screens.push({ id: i, name: name, price: price });
        }


        for (let i = 0; i < 2; i++) {//
            let name = prompt("Какой дополнительный тип услуги нужен?", "Назваие!");
            let price = 0;


            do {
                price = prompt("Сколько это будет стоить?", "Укажите цену!");
            }
            while (!appData.isNumber(price));

            appData.services[name] = +price;
        }

        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },

    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screensPrice += +screen.price;
        }

        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key];
        }
    },

    // ввод только числа(защита)

    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },


    // функция возвращает сумму стоимости верстки и стоимости дополнительных услуг

    getFullPrise: function () {
        appData.fullPrice = appData.screensPrice + appData.allServicePrices;
    },

    // функция возвращает title меняя его таким образом: первый символ с большой буквы, остальные с маленькой с учетом пустых символов

    getTitle: function () {
        appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase(1);

    },

    // функция возвращает итоговую стоимость за вычетом процента отката

    getServicePercentPrices: function () {
        appData.servicePercentPrice = Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)));
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
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);
    },

    /*logger: function () {
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
*/


};

appData.start();