class Component {
  render() {
    return 'component is rendered';
  }
}

const sum = (...nums) => nums.reduce((acc, num) => acc + num);
const subtract = (...nums) => nums.reduce((acc, num) => acc - num);
const divide = (...nums) => nums.reduce((acc, num) => acc / num);
const multiply = (...nums) => nums.reduce((acc, num) => acc * num);

const test = 12354;

// експортування файлів

// 1. експортування за замовчанням
// так можна робити один раз за файл
export default Component;

// 2. іменний експорт
// можна робити скількі треба раз за один файл
export {
  sum,
  subtract,
  divide,
  multiply
};

export const testValue = 10;

export function test12334 () {}

// Error
// const sadsad = 1232;
// export sadsad;