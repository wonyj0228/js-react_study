function taskA(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a + b;
      resolve(res);
    }, 3000);
  });
}

function taskB(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * 2;
      resolve(res);
    }, 1000);
  });
}

function taskC(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * -1;
      resolve(res);
    }, 2000);
  });
}

// then 체이닝.
// promise 객체를 return 시키면서 .then을 끝없이 사용할 수 있음
taskA(5, 1)
  .then((a_res) => {
    console.log('A RESULT : ', a_res);
    return taskB(a_res);
  })
  .then((b_res) => {
    console.log('B RESULT : ', b_res);
    return taskC(b_res);
  })
  .then((c_res) => {
    console.log('C RESULT : ', c_res);
  });

// promise 체이닝 중 끊고 다른 작업을 할 수도 있음.

const bPromiseResult = taskA(5, 1).then((a_res) => {
  console.log('A RESULT : ', a_res);
  return taskB(a_res);
});

console.log('sldkjfsldkfjldkj');
console.log('sldkjfsldkfjldkj');
console.log('sldkjfsldkfjldkj');

bPromiseResult
  .then((b_res) => {
    console.log('B RESULT : ', b_res);
    return taskC(b_res);
  })
  .then((c_res) => {
    console.log('C RESULT : ', c_res);
  });
