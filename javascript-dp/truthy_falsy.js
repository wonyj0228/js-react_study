const getName = (person) => {
  if (!person) {
    // false NOT => true
    return '객체가 아닙니다';
  }
  return person.name;
};

// let person = { name: 'yejin' };
// let person = undefined;
let person = null;
const name = getName(person);
console.log(name);

// 자바스크립트의 조건식에는 boolean 값이 아니어도 참이나 거짓으로 인식이 되는 속성이 있다.

// Truthy : 빈배열 [] , 객체 리터럴 {} , Number(2, Infinity, 음수), 비어있지 않은 문자열("0","false") ...등
// Falsy : null, undefined, Number (0, -0, NaN) , 비어있는 문자열 ("") ...등

const a = -42;

if (a) {
  console.log('TRUE');
}
