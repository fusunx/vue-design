/**
 * 返回对折次数
 * @param {*} length 长度
 */
function judgeTimes(length) {
  let times = 0;
  while (length !== 1) {
    length = length / 2;
    times++;
  }
  return times;
}

const result = [];
let path = [];
function findArray(arr, k) {
  combineHelper(arr, k, 0);
}

function combineHelper(arr, k, startIndex) {
  if (path.length === k) {
    console.log(path);
    result.push(JSON.parse(JSON.stringify(path)));
    return;
  }
  for (let i = startIndex; i < arr.length; i++) {
    path.push(arr[i]);
    combineHelper(arr, k, i + 1);
    path.pop();
  }
}
findArray(["a", "b", "c", "d"], 3);
console.log(result);
