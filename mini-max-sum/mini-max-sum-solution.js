/*global process*/
"use strict"

process.stdin.resume()
process.stdin.setEncoding("utf-8")

let inputString = ""
let currentLine = 0

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin
})

process.stdin.on("end", function () {
  inputString = inputString.split("\n")

  main()
})

function readLine() {
  return inputString[currentLine++]
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  // Write your code here
  let min = 0
  let max = 0

  for (let i = 0; i < arr.length; i++) {
      const n = arr.length
      const subArr = arr.slice(0, i).concat(arr.slice(i + 1, n))
      const sum = subArr.reduce((prev, curr) => prev + curr , 0)
      if (sum > max) max = sum
      if (sum < min || min === 0) min = sum 
  }

  console.log(min, max)
//   My code ends h
}

function main() {
  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10))

  miniMaxSum(arr)
}
