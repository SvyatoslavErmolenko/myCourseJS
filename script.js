const title = "lesson02";
console.log(typeof title); // вывод в консоль тип данных
const screens = "Simple, Complex, Interactive";
console.log(screens.length); // вывод в консоль длину строки
console.log(screens.toLocaleLowerCase().split(" ")); // приводит строку к нижнему регистру и разбивает строку на массив
const screensPrice = 182;
console.log("\t The cost of layout screens in RUB:", screensPrice, "\n\t The cost of layout screens in USD:", screensPrice,
    "\n\t The cost of layout screens in UAH:", screensPrice, "\n\t The cost of layout screens in CNY:", screensPrice); // выводит в консоль стоимость верстки: рублей, долларов, гривен, юани
const rollback = 32;
const fullPrice = 548;
console.log(typeof fullPrice); // вывод в консоль тип данных
console.log("\t Cost of website development in RUB:", fullPrice, "\n\t Cost of website development in USD:", fullPrice,
    "\n\t Cost of website development in UAH:", fullPrice, "\n\t Cost of website development in CNY:", fullPrice); // выводит в консоль стоимость разработки сайта: рублей, долларов, гривен, юани
const adaptive = true;
console.log(typeof adaptive); // вывод в консоль тип данных

console.log(fullPrice * (rollback / 100)); // процент отката посреднику