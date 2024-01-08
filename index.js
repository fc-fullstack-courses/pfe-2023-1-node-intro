// імпортування файлів / модулів

// 1. імпортування за замовчанням
// import ComponentImport from './Component.js'; // назву можна змінювати на будь-яку

// 2. іменне імпортування 
// import { sum, divide, multiply, test12334 as newName } from './Component.js';

// 3. Комбінований імпорт
import ComponentImport, { sum, divide, multiply, test12334 as newName } from './Component.js';

const comp1 = new ComponentImport();

console.log(comp1.render());

console.log(newName());

const numbers = [10,549,9879,-964,-654,45,0.5];

const test = 21323423423;

console.log('Hello from Node');

console.log(sum(...numbers));