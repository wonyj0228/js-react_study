const arr = [1,2,3,4];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

arr.forEach((elm) => console.log(elm));

const newArr = arr.map((elm) => elm*2)
console.log(newArr)
// map : 원본 배열의 모든 요소를 순회하며 연산을 통해 리턴된 값들만을 배열로 반환
