function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function helloAsync() {
  //   return delay(3000).then(() => {
  //     return 'hello Async'; // resolve의 결과값을 return
  //   });

  await delay(3000);
  // await을 비동기 함수 앞에 붙이면 비동기 함수가 동기처럼 작동
  return 'hello async';
} // async를 붙이면 프로미스를 반환하는 비동기 함수가 됨

async function main() {
  console.log(await helloAsync());
}

main();
