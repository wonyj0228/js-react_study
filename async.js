// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

/*
// async 함수는 promise를 리턴하는 비동기 함수가 됨
async function helloAsync() {
  // async를 붙인 함수의 return 값은 promise - resolve함수의 argument가 됨
  return delay(3000).then(() => {
    // return이 없으면 기본 default는 undefined
    return 'hello Async';
  });
}
*/
async function helloAsync() {
  // await을 비동기 함수 앞에 작성하면 비동기 함수를 동기처럼 작동하게 할 수 있다.
  // await은 async 함수 내에서만 사용 가능
  await delay(3000);
  return 'hello Async';
}

async function main() {
  const res = await helloAsync();
  console.log(res);
}

// main();

const delay = async (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const asyncA = async (a, b, ms) => {
  await delay(ms);
  return a + b;
};

const asyncB = async (a, ms) => {
  await delay(ms);
  return a * 2;
};

const asyncC = async (a, ms) => {
  await delay(ms);
  return a * -1;
};

async function main2() {
  const a_res = await asyncA(3, 5, 3000);
  console.log(a_res);
  const b_res = await asyncB(a_res, 1000);
  console.log(b_res);
  const c_res = await asyncC(b_res, 2000);
  console.log(c_res);
}

main2();
