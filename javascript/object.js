// 객체 생성과 프로퍼티 접근법

let person2 = new Object(); //new 생성자를 사용한 객체 선언 : 생성자 방식
let person = {
    key : "value", // key-value 쌍으로 묶인 것  = 프로퍼티(객체 프로퍼티)
    key2 : "value",
    key3 : true,
    key4 : undefined,
    key5 : function () {},
    key6 : 1,
} // 중괄호를 사용해서 객체 선언하는 것 : 객체 리터럴 방식
// 객체 프로퍼티는 개수제한이 없음
// 프로퍼티의 value에는 어떤 자료형이든 들어갈 수 있음 (문자, 배열, 함수 등등)
// 프로퍼티의 key는 문자열로만 구성될 수 있음. 따옴표는 쓰지 않음.

console.log(person.key2) // 점 표기법
// 존재하지 않는 property에 접근하려고 하면 undefined로 나옴

console.log(person['key4']) // 괄호 표기법. 
// 프로퍼티의 key를 반드시 문자형, 따옴표를 같이 사용해야 함
// 동적인 파라미터를 받아서 객체의 프로퍼티에 접근하는 경우에 많이 사용함

console.log(getPropertyValue("key3"))

function getPropertyValue(key) {
    return person[key];
}



// 객체 생성 후 추가, 삭제, 수정
const person3 = {
    name : "yejin", // member
    age : 27, // member
    say : function() { // method
        console.log("hi");
        console.log(`hi my name is ${this.name}`);
        // 객체 안에 메서드를 만들게 되면 그 method 안에서 자기자신을 this라는 이름으로 부를 수있음
    }
}

// 객체 내 함수 호출 방법 2가지
// 프로퍼티에 함수를 담는 것 = 객체 안에 들어있는 함수 = method
// 함수가 아닌 property = member
person3.say();
person3["say"]();

// 추가 - 점 표기법, 괄호 표기법
person3.location = "korea";
person3["gender"] = "female";
console.log(person3)

// 수정 
person3.name = "yejin A";
person3.age = 40;
console.log(person3)

// 삭제
delete person3.age;
delete person3["gender"];
// delete 방법은 실제 객체와 property간의 관계를 끊을 뿐 메모리는 지워지지 않음
// 따라서 delete는 추천 X
person3.name = null; //null 로 바꾸면 해당 메모리를 비워주기 때문에 추천함
console.log(person3)


// 객체에 존재하지 않는 property에 접근하는 것은 추가할 것이 아니라면 하지 않는 것이 베스트
// 따라서 해당 key가 있는지 확인 하는 방법이 있음
console.log(`name : ${"name" in person3}`) // in연산자를 사용
console.log(`age : ${"age" in person3}`)

// 객체 상수? 변수?
// person3를 const로 선언을 해도 person3의 프로퍼티를 수정하는 행위는 가능함
// 이유는 person3 상수 자체를 수정하는 것이 아니라 상수가 갖는 object를 수정하는 행위이기 때문임
// 그럼 person3 자체를 수정하는 것은 무엇인가?
// person3 = {
//     age : 23,
//     name : "yejin"
// } // error

// console.log(person3) //error