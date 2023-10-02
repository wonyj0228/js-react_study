// for문
for (let i = 1; i <= 100; i++) {
    // 초기식 : let i = 1. 반복의 주체가 되는 변수를 선언
    // 조건식 : i <= 100. 반복 내용이 해당 조건에 부합할때만 실행
    // 연산 : i++ 반복이 수행될 때마다 할 연산
}

const person = {
    name : "yejin",
    age : 27,
    tall : 164,
}

const personKeys = Object.keys(person);
const personValues = Object.values(person);

for(let i=0; i<personKeys.length; i++) {
    console.log(`${personKeys[i]} : ${person[personKeys[i]]}`);
}