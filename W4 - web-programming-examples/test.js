//변수 상수
let myVariable = 123;
const myConstant = "Hello, world!";

console.log(myVariable); //123
console.log(myConstant); // Hello, world!

//데이터 타입
let myNumber = 123;
let myString = "Hello, world!";
let myBoolean = true;
let myNull = null;
let myUderfinded = undefined;
let myObject = { name: "John", age: "30" };
let mySymbol = Symbol("mySymbol");

console.log(typeof myNumber); // number
console.log(typeof myString); // string
console.log(typeof myBoolean); //boolean
console.log(typeof myNull); // object (이는 JS의 버그로 인해 발생)
console.log(typeof myUderfinded); // undefined
console.log(typeof myObject); // object
console.log(typeof mySymbol); // symbol


//연산자
let x = 10;
let y = 5;

console.log(x + y); // 15
console.log(x - y); // 5
console.log(x * y); // 50
console.log(x / y); // 2
console.log(x % y); // 0

console.log(x > y); // true
console.log(x < y); // false
console.log(x >= y); // true
console.log(x <= y); // false
console.log(x === y); // false
console.log(x !== y); // true

// == (Double equals, or loose equality)
console.log('5' == 5); // true, because the string '5' is coerced to the number 5 before the comparison

// === (Triple equals, or strict equality)
console.log('5' === 5); // false, because the string '5' and the number 5 are of different types

let a = true;
let b = false;

console.log(a && b); // false
console.log(a || b); // true
console.log(!a); // false

// 조건문
let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
} else if (age >= 13) {
  console.log("You are a teenager.");
} else {
  console.log("You are a child.");
}


// for문
for (let i = 0; i < 5; i++) {
    console.log(i);
  }

// while문
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}


// switch문
let fruit = "banana";

switch (fruit) {
  case "apple":
    console.log("This is an apple.");
    break;
  case "banana":
    console.log("This is a banana.");
  case "orange":
    console.log("This is an orange.");
    break;
  default:
    console.log("Unknown fruit.");
}

// 배열 순회
const arr = [1,2,3,4,5];

for (let i = 0; i <arr.length; i++) {
    console.log(arr[i]);
}

arr.forEach(fuction (element))

// 함수
function add(a,b) {
    return a + b;
}

let result = add(1,2);
console.log(result); //3