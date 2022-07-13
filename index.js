// Илья, 03.08.2021
console.log(ucFirst("hello word")) // 03.08.2021, вывод в консоль hello word
var a1=50
var a2=30
var a3=a1-a2
var a4=a1+a3
var a5=a1/2
var min=a1;
if (a1>a2)  min=a2;
if (min>a3) min=a3;
if (min>a4) min=a4;
if (min>a5) min=a5;
console.log(a1,a2,a3,a4,a5) // 03.08.2021, переменные
console.log(a1/a5, a1+a2+a3+a4+a5, a1+a2+a3+a4+a5/5, min, a1+""+a5+""+a3+""+a2+""+"a2")
function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
  } // 03.08.2021, создать функцию для str и maxlength
  function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }
  var arr=[a1,a2,a3,a4,a5]

function sorti(arr,option) {
  if (option=="up") {
    for (var i = 1; i < arr.length; i++) {
      var tmp = arr[i];
      for (var j = i - 1; j >= 0 && (arr[j] > tmp); j--) {
          arr[j + 1] = arr[j];
      }
      arr[j + 1] = tmp;
  }
    return arr;
  }
  if (option=="down") {
    for (var i = 1; i < arr.length; i++) {
      var tmp = arr[i];
      for (var j = i - 1; j >= 0 && (arr[j] < tmp); j--) {
          arr[j + 1] = arr[j];
      }
      arr[j + 1] = tmp;
  }
    return arr;
  }
}
  console.log(sorti(arr,"down"));

  function count(num1, mark, num2) {
    switch (mark) {
      case "*":
        return num1 * num2;
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "/":
        if (num2 !== 0) {
          return num1 / num2;
        } else {
          return "На нуль делить нельзя!";
        }
    }
  }

const buttonPlus=document.querySelector(".plus");  
const buttonMinus=document.querySelector(".minus");  

var tempList = []
var count = 0
buttonPlus.addEventListener('click', () => {

  const item = document.getElementsByClassName("aside-list-section");
  var dupNode = item[count] ? item[count].cloneNode(true) : tempList[count]; // count = 0, count = 1, count = 2
  count = count + 1 
  console.log(item);
  document.querySelector(".aside-list").appendChild(dupNode)  
  if (!document.getElementsByClassName("aside-list-section").length){
    myFunc();
  }
})

buttonMinus.addEventListener('click', () => {
  const item = document.getElementsByClassName("aside-list-section");
  var dupNode = item[item.length-1].cloneNode(true) // count = 0, count = 1, count = 2
  console.log(item);
  tempList.push(dupNode)
  document.querySelector(".aside-list").removeChild(item[item.length-1])
  count=0;
  if (document.getElementsByClassName("aside-list-section").length===0){
    deleteSelf(buttonMinus);
  }
})

function deleteSelf(button) {
button.remove();
}

function myFunc() {
  let  newElem = document.createElement( "button" ); // создаем новый элемент <button>
  const text = document.createTextNode( "-" ); // создаем текстовое содержимое
  newElem.appendChild( text ); // добавляем текстовое содержимое элементу <button>                     
  document.button-container.appendChild( newElem );  // добавляем наш элемент в элемент <body>
}