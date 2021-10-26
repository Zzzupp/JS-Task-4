
// Задание 1

// Просмотрите в консоли браузера объект navigator. Найдите информацию о своем браузере, системе.

// Просмотрите в консоли браузера объект location. Найдите в этом объекте текущий url, где вы находитесь.



// Выведите в консоль строку:

// С помощью браузера ... я открыл страничку ... 

// (необходимые значения добавьте с помощью BOM)


// console.log(`С помощью браузера ${navigator['userAgent']} я открыл страничку ${location['href']}`);

// Задание 2

// В файле html есть разметка:

// <ul id="list">
// <li>Джон</li>
// <li>Пит</li>
// <li>Джессика</li>
// <li>Сара</li>
// </ul>

// Вывести в консоль каждое из имен (содержимое каждого li).

// for(let li of document.body.querySelectorAll('li')){
//     console.log(li.innerText);
// }
// Задание 3

// Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)
// let numbers = 0;
// for(let li of document.body.querySelectorAll('li')){
//     li.innerText = numbers++;
// }

// Задание 4

// Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое. Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.

// function getTags(name, color, inside){
//     let nameEl = document.createElement(name);
//     nameEl.innerText = inside;
//     nameEl.style.color = color;
//     document.body.appendChild(nameEl);
// }

// getTags('div', 'red', 'qweqwe');
// getTags('li', 'blue', 'ewqewq');
// getTags('aside', 'black', 'trwqewq');


// Задание 5

// Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.

// let p = document.createElement('p');
// p.innerText = 'some text';
// p.style.fontsize = '36px';
// p.style.fontWeight = 'bold';
// document.body.appendChild(p);

// Задание 6

// Вставить в страницу (в html документ) тег <select>. С помощью js добавить в этот select опции (option) под годы от 1960 по 2020.

// let selected = document.getElementById('selector');

// for(let i = 1960; i <= 2020; i++){
//     let option = document.createElement('option');
//     option.innerText = i;
//     selected.appendChild(option);
// }

// Задание 7

// Вставить в страницу (в html документ) ul.
// Предусмотреть в коде следующий массив:

// ulclients
// const clients = [{
//     name: "Женя",
//     order: true
//     },
//     {
//     name: "Кристина",
//     order: true
//     },
//     {
//     name: "Павел",
//     order: false
//     },
//     {
//     name: "Виолетта",
//     order: false
//     },
//     {
//     name: "Костя",
//     order: true
// }];
// for(let client of clients){
//     console.log(client);
//     let clienthtml = document.createElement('li');
//     let status = '';
//     if (client['order'] == true){
//         status = 'оплатил';
//     } else {
//         status = 'отменил';
//     }
//     clienthtml.innerText = `Клиент ${client['name']} ${status} заказ`;
//     document.getElementById('ulclients').appendChild(clienthtml);
// }

// [{
// name: "Женя",
// order: true
// },
// {
// name: "Кристина",
// order: true
// },
// {
// name: "Павел",
// order: false
// },
// {
// name: "Виолетта",
// order: false
// },
// {
// name: "Костя",
// order: true
// }];



// Перебирать массив, для каждой ячейки массива создать li, наполнить li текстом:
// - Клиент Женя оплатил заказ
// - Клиент Павел отменил заказ
// ... остальные li с контентом



// Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта (а объект здесь - это текущая ячейка массива), статус зависит от от свойства order: если true – то оплатил, если false – то отменил.


// Задание 8

// Есть массив ссылок:

// let linksArr = ['https://www.onliner.by/', 'https://www.youtube.com/', 'https://vk.com/', 'https://www.google.com/', 'https://yandex.ru/'];


// Вам нужно:

// 1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)

// let div = document.createElement('div');
// div.style.backgroundColor = 'red';
// div.style.padding = '100px';

// document.body.appendChild(div);
// 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег
// c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
// При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")
// ПОДСКАЗКА Для создания атрибута используется js метод setAttribute:

// for(element of linksArr){
//     let a = document.createElement('a');
//     a.setAttribute('href', element);
//     a.setAttribute('target', "_blank");
//     a.style.display = 'block';
//     a.innerText = element;
//     div.appendChild(a);
//     // console.log(div2['setAttribute'] + '  ' + div2['textContent']); 
// }


// element.setAttribute(name, value) - где name - сам атрибут, который нужно добавить, value - его значение.

// Вкладывать ссылки в див нужно с помощью метода appendChild или append.

// 3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY

// Задание 9

// Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код, который найдет в HTML все элементы с классом "forRemove" и удалит их.
// let deleteAll = document.getElementsByClassName('forRemove');

// console.log(deleteAll);

// for(let i = 0; i < deleteAll.length; i){
//     deleteAll[i].remove(deleteAll[i]);
// }


// ПОДСКАЗКА Для удаления DOM-элементов можно использовать метод element.remove()

// Задание 10*

// Создать массив объектов с полями name, age. Создать html таблицу с двумя колонками,
// заполненную этими объектами. Name должно быть красного цвета, age - зеленого.

// const stats = [{name: 'Borys', age: 11},{name: 'Dmitry', age: 65},{name: 'Nazar', age: 22},{name: 'Vladislave', age: 34}];

// let table = document.createElement('table');
// document.body.appendChild(table);
// //
// for(element of stats){
//     let tr = document.createElement('tr');
//     let tdName = document.createElement('td');
//     let tdAge = document.createElement('td');
//     tdName.innerText = element['name'];
//     tdName.style.backgroundColor = 'red';
//     tdAge.innerText = element['age'];
//     tdAge.style.backgroundColor = 'green';
//     tr.appendChild(tdName);
//     tr.appendChild(tdAge);
//     table.appendChild(tr);
// }