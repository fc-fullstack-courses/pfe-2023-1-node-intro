// імпортування файлів / модулів
import os from 'os'; // або 'node:os'
// console.log(os.cpus());

import _ from 'lodash';

const randomNumber = _.random(-1000,1000, false);

console.log(randomNumber);

// 1. імпортування за замовчанням
// import ComponentImport from './Component.js'; // назву можна змінювати на будь-яку

// 2. іменне імпортування 
// import { sum, divide, multiply, test12334 as newName } from './Component.js';

// 3. Комбінований імпорт
// import ComponentImport, { sum, divide, multiply, test12334 as newName } from './Component.js';

// const comp1 = new ComponentImport();

// console.log(comp1.render());

// console.log(newName());

// const numbers = [10,549,9879,-964,-654,45,0.5];

// const test = 21323423423;

// console.log('Hello from Node');

// console.log(sum(...numbers));

/*

Задача: піти в магазин

Імперативний стиль: встати зі стільця, 
повернутися на 90 градусів праворуч, зробити 5 кроків
for(let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

Декларативний стиль: встати, вийти з дому, піти в обраний магазин
for (const item of arr) {
  console.log(item);
}
*/
