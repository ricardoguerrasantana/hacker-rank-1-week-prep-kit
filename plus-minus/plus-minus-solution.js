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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  // Write your code here
  let positives = 0
  let negatives = 0
  let zeros = 0
  const n = arr.length

  for (let i = 0; i < n; i++) {
    const num = arr[i]
    if (num > 0) positives++
    if (num < 0) negatives++
    if (num === 0) zeros++
  }

  process.stdout.write(`${(positives / n).toFixed(6)}\n`)
  process.stdout.write(`${(negatives / n).toFixed(6)}\n`)
  process.stdout.write(`${(zeros / n).toFixed(6)}\n`)
  // My code ends here
}

function main() {
  // eslint-disable-next-line no-unused-vars
  const n = parseInt(readLine().trim(), 10)

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10))

  plusMinus(arr)
}
