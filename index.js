"use strict";
// 1======================

const whichDrink = prompt("Що ви хочете випити ? :").toLowerCase();

switch (whichDrink) {
  case "tea":
    console.log("Чай!");
    break;
  case "cofe":
    console.log("Кава!");
    break;
  case "juice":
    console.log("Сік!");
    break;
  default:
    console.log("Ви вибрали нічого або інший напій не з списку !");
    break;
}

// 2======================

const whichDay = prompt("Вкажіть день : ").toLowerCase();

switch (whichDay) {
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
    console.log("Це робочій день !");
    break;
  case "saturday":
  case "sunday":
    console.log("Це вихідний день !");
    break;

  default:
    console.log("Ви вибрали нічого або інший день не з списку !");
    break;
}
// 3======================

const whichMonth = prompt("Вкажіть місяць : ").toLowerCase();

switch (whichMonth) {
  case 1:
  case 2:
  case 12:
    console.log("Це зима !");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Це весна !");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Це літо !");
    break;

  case 9:
  case 10:
  case 11:
    console.log("Це осінь !");
    break;

  default:
    console.log("Ви вибрали нічого або інший місяць не з списку !");
    break;
}

// 4======================

const whichColor = prompt("Вкажіть колір : ").toLowerCase();

switch (whichColor) {
  case "red":
    console.log("стоп");
    break;
  case "green":
    console.log("йти");
    break;
  case "yellow":
    console.log("чекати");
    break;
  default:
    console.log("Ви вибрали нічого або інший колір не з списку !");
    break;
}

// 5======================

const firstNumber = 15;
const secondNumber = 8;

const operator = "+";

switch (operator) {
  case "+":
    console.log(firstNumber + secondNumber);
    break;
  case "-":
    console.log(firstNumber - secondNumber);
    break;
  case "*":
    console.log(firstNumber * secondNumber);
    break;
  case "/":
    console.log(firstNumber / secondNumber);

    alert(`Твоє число : ${firstNumber / secondNumber}`);

    break;
  default:
    console.log("Невірні числа ");
    break;
}
//  Калькулятор мій

// const firstNumber = parseFloat(prompt("Введіть перше число:"));
// const secondNumber = parseFloat(prompt("Введіть друге число:"));

// const action = prompt("Виберіть дію : ");

// let result;

// switch (action) {
//   case "+":
//     result = firstNumber + secondNumber;
//     console.log(`Результат дії : ${firstNumber} + ${secondNumber} = ${result}`);
//     break;
//   case "-":
//     result = firstNumber - secondNumber;
//     console.log(`Результат дії : ${firstNumber} - ${secondNumber} = ${result}`);
//     break;
//   case "*":
//     result = firstNumber * secondNumber;
//     console.log(`Результат дії : ${firstNumber} * ${secondNumber} = ${result}`);
//     break;
//   case "/":
//     if (secondNumber !== 0) {
//       result = firstNumber / secondNumber;
//       console.log(`
//             Результат дії : ${firstNumber} / ${secondNumber} = ${result}`);
//     } else {
//       console.log("На нуль ділити не можна");
//     }
//     break;
//   default:
//     console.log("Ви вибрали нічого або іншу дію не з списку !");
// }
