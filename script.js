// const judul1 = (document.getElementById("Judul1").innerHTML = "No1");
// const judul2 = (document.getElementById("Judul2").innerHTML = "No2");
// const judul3 = (document.getElementById("Judul3").innerHTML = "No3");

// const p1 = (document.getElementById("soal1").innerHTML = "aku");
// const p2 = (document.getElementById("soal2").innerHTML = "soal2");
// const p3 = (document.getElementById("soal3").innerHTML = "No3");

console.log("No 1");
// function minMax(arr) {
//   const min = Math.min.apply(Math, arr);
//   const max = Math.max.apply(Math, arr);
//   const result = [min, max];
//   console.log(result);
// }

function minMax(arr) {
  console.log([Math.min(...arr), Math.max(...arr)]);
}
minMax([1, 2, 3, 4, 5]);
minMax([233454, 5]);
minMax([1]);

console.log("No 2");

function dropRight(arr, drop = 1) {
  const reverse = arr.reverse();
  const result = reverse.slice(drop);
  console.log(result.reverse());
}
dropRight([1, 2, 3]);
dropRight([1, 2, 3], 2);
dropRight([1, 2, 3], 5);
dropRight([1, 2, 3], 0);

console.log("No 3");

function mean(arr) {
  const sum = arr.reduce((a, b) => {
    return a + b;
  });
  const avg = sum / arr.length;
  const result = avg.toPrecision(3);
  console.log(result);
}
mean([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3]);
mean([2, 3, 2, 3]);
mean([3, 3, 3, 3, 3]);
