function showGugudan() {
let num = prompt("몇 단을 실행할까요?", "1");
let result = "";

for (let i = 1; i <= 9; i++) {
    result += `${num} x ${i} = ${num * i} <br>`;
}

document.getElementById("output").innerHTML = result;
}

function showFibonacci() {
let num = prompt("몇 항까지 실행할까요?", "1");
let a = 0, b = 1, c, result = "";

for (let i = 0; i < num; i++) {
    result += a + ", ";
    c = a + b;
    a = b;
    b = c;
}

document.getElementById("output").innerHTML = result;
}

function showStarPyramid() {
const num = prompt("몇 층까지 쌓을까요?", "1");
let result = "";

for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num - i; j++) {
    result += "&nbsp;";
    }
    for (let k = 1; k <= i * 2 - 1; k++) {
    result += "*";
    }
    result += "<br>";
}

document.getElementById("output").innerHTML = result;
}

function showLCM() {
const num1 = prompt("첫 번째 숫자 입력:", "1");
const num2 = prompt("두 번째 숫자 입력:", "1");
const lcm = calculateLCM(num1, num2);
document.getElementById("output").innerHTML = `최소 공배수는 ${lcm}입니다.`;
}

function showGCD() {
const num1 = prompt("첫 번째 숫자 입력:", "1");
const num2 = prompt("두 번째 숫자 입력:", "1");
const gcd = calculateGCD(num1, num2);
document.getElementById("output").innerHTML = `최대 공약수는 ${gcd}입니다.`;
}

function calculateLCM(num1, num2) {
const max = Math.max(num1, num2);
let lcm = max;

while (true) {
    if (lcm % num1 === 0 && lcm % num2 === 0) {
    break;
    }
    lcm += max;
}

return lcm;
}

function calculateGCD(num1, num2) {
let a = num1;
let b = num2;

while (b !== 0) {
    const r = a % b;
    a = b;
    b = r;
}

return a;
}