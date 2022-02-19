/*global process require*/
"use strict"

const fs = require("fs")

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    const meridian = s.slice(-2)
    const time = s.split(":").map((segm) => Number.parseInt(segm))
    
    let _24hourFormat = time
    if (meridian == "AM" && time[0] === 12)
        _24hourFormat = [0, ...time.slice(1)]
    if (meridian == "PM" && time[0] !== 12)
        _24hourFormat = [time[0] + 12, ...time.slice(1)]

    return _24hourFormat
        .map((segm) => (segm < 10 ? `0${segm}` : segm))
        .join(":")
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH)

    const s = readLine()

    const result = timeConversion(s)

    ws.write(result + "\n")

    ws.end()
}
