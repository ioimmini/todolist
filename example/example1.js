// function double(arr) {
//     let result = [];
//     for(let i = 0; i < arr.length; i++){
//         result.push(arr[i] * 2);
//     }
//     return result;
// }
// 명령형 프로그래밍
// 어떻게 처리하는지에 대한 묘사

function double(arr) {
  return arr
    .filter((param) => typeof param === "number")
    .map((number) => number * 2);
}
// 선언형 프로그래밍
// 명령형 보다는 선언형 프로그래밍을 지향해야한다.
// 무엇을 원하는 지에 대한 묘사

document.querySelector("body").innerHTML = double([2, 4, 6]);
// double([1, 2, 3]) => [2, 4, 6]
