3 ** 2; // 9
2 **4; // 16
Math.pow(2, 4); //16
Math.pow(3, 2);// 9

const e = 2.7;
const pi = 3.14;
const kk = pi * e;
console.log(kk);

const a;
console.log(a);

console.log (11 % 3 **2)

1 + true
false + false
3 / 0
Infinity * Infinity // Infinity
Infinity * 0 // NaN
-2 ** 2; invalid
-(2 ** 2);

const weight = 48;
const c = 300000000;
const energy = weight * Math.pow(c, 2);
console.log(energy);

const surfacearea = (radius) =>{
    return 4 * 3.14 * radius * radius; //определение функции
}
const surfaceMars = surfacearea(3390); //вызов функции
const surfacearea = (radius) => {
    return 4 * 3.14 * square(radius);
}
const square = (n) => {
    return n * n;
}

const percentage = (number, total) => {
    return number * 100 / total;
}
console.log("How much of may is gone?");
console.log(persentage(30, 31));

//const identity = (value) => {
//    return value;
//};

//const identity = function(value) {
//    return value;
//};

//function identity(value) {
//    return value;
//}

//const identity = value => value; (если у функции 1 аргумент)

const squareOfSum = (a, b) => {
    return Math.pow(a, 2) + 2 * a * b + Math.pow(b, 2);
  }
  console.log(squareOfSum(2, 3));
  console.log(squareOfSum(1, 10));

const abs = num => { 
    if (num > 0) {
        return num;
    } else if (num < 0) {
        return -num;
    } else {
        return 0;
    }
}
const abs = (num) => {          
    if (num === 0 || num > 0) {
        return num;
    } else {
        return -num;
    }
}
const absValue = (num >=0) ? num : -num
let absValue;

if (num >=0) {
    absValue = num;
} else {
    absValue = -num;
}
const getAbs = num => (num >=0) ? num : -num;

const type = (num > 0) ? 'positive' : (num < 0) ? 'negative' : 'zero';

const finalGrade = (exam, projects) => {
    if (exam > 90 || peojects > 10) {
      return 100;
    } else if (exam > 75 && projects >= 5) {
      return 90;
    } else if (exam > 50 && projects >= 2) {
      return 75;
    } else {
      return 0
    }
  }

  const cube = (num) => {
      return num * num * num;
  }

  cost fahrToCelsius = (fahr) => {
      return (fahr - 32) * 5/9;
  }