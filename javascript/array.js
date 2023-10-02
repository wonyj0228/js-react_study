// 배열 선언방식
let array1 = new Array() // new 생성자
let array2 = [] // 배열 리터럴 (대괄호 사용)

// 배열안에는 자료형이 달라도 다 들어갈 수 있음 (객체, 배열, 함수 등등 모두)
let array3 = [1, "2", true, null, undefined, {}, [], function () {}];


let arr = [1,2,3,4,5];
console.log(arr[0]); // 대괄호안에 index로 배열 요소에 접근 가능

// 배열에 item 추가하기
arr.push(6); //배열의 가장 마지막에 추가

console.log(arr);
console.log(arr.length);