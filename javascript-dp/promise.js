function isPositive(num, resolve, reject) {
  setTimeout(() => {
    if (typeof num === 'number') {
      // 성공 => resolve
      resolve(num >= 0 ? '양수' : '음수');
    } else {
      // 실패 => reject
      reject('주어진 값이 숫자형 값이 아닙니다.');
    }
  }, 2000);
}

// isPositive(
//   [],
//   (res) => {
//     console.log('성공적으로 수행됨 : ', res);
//   },
//   (err) => {
//     console.log('실패 하였음 : ', err);
//   }
// );

function isPositiveP(num) {
  const exector = (resolve, reject) => {
    // 실행자
    setTimeout(() => {
      if (typeof num === 'number') {
        // 성공 => resolve
        console.log(num);
        resolve(num >= 0 ? '양수' : '음수');
      } else {
        // 실패 => reject
        reject('주어진 값이 숫자형 값이 아닙니다.');
      }
    }, 2000);
  };

  const asyncTask = new Promise(exector);
  return asyncTask;
}

const res = isPositiveP([]);

res
  .then((res) => {
    console.log('작업 성공 : ', res);
  })
  .catch((err) => {
    console.log('작업 실패 : ', err);
  });
