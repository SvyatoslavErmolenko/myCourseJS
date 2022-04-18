'use strict';

const books = document.querySelector('.books');

// восстанавливает порядок книг

const book = document.querySelectorAll('.book');

book[0].before(book[1]);
book[2].before(book[4]);
book[5].before(book[2]);
book[2].before(book[5]);

// замена картинки заднего фона

const body = document.querySelector('body');

body.style.backgroundImage = 'url(image/you-dont-know-js.jpg)';

// исправление заголовка в книге 3

const thirdBookTitle = book[4].querySelector('h2 a');

thirdBookTitle.innerText = 'Книга 3. this и Прототипы Объектов';

// удаление рекламы

const adv = document.querySelectorAll('.adv');

adv[0].remove();

// восстановление порядка глав во второй и пятой книге

const secondBook = book[0].querySelectorAll('li');

secondBook[3].after(secondBook[6]);
secondBook[6].after(secondBook[8]);
secondBook[9].after(secondBook[2]);

const fifthBook = book[5].querySelectorAll('li');

fifthBook[1].after(fifthBook[9]);
fifthBook[9].after(fifthBook[3]);
fifthBook[3].after(fifthBook[4]);
fifthBook[7].after(fifthBook[5]);

// в шестой книге добавить главу

const sixthBook = book[2].querySelectorAll('li');
const newChapter = fifthBook[2].cloneNode(true);

newChapter.textContent = 'Глава 8: За пределами ES6';
book[2].append(newChapter);
sixthBook[8].after(newChapter);


// логи
console.log(books);
console.log(book);
console.log(body);
console.log(thirdBookTitle);
console.log(secondBook);
console.log(fifthBook);
console.log(sixthBook);