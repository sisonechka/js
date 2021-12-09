//1
function isEmpty(obj){
  if(obj==undefined){return alert(true);}
  else{return alert(false);}
}
isEmpty();

//2
let a=3;
function multiplyNumeric(obj){
  if(typeof obj==='number'){
  obj*=2;
  }
}
multiplyNumeric(a);

//3
function readNumber(a) {
  a = prompt('Input number:');
  while (isNaN(parseInt(a, 10))===true){
    a = prompt('Input number:');
    if(a==null || (isNaN(parseInt(a, 10))===false)){
    break;
    }
  }
  if(a!==null && (isNaN(parseInt(a, 10))===false)){
    return alert(a);
  }
  else if(a===null){return alert(null);}
}
readNumber();

//4
function random(min, max){
  let i=Math.random()*(max-min)+min;
  return i;
}
alert(random(1,5));

//5
function randomInteger(min, max){
  let i=Math.floor(Math.random()*(max-min+1)+min);
  return i;
}
alert(randomInteger(1,5));

//6
function ucFirst(str){
  if(!str){ return str;}
  let newStr=str[0].toUpperCase()+ str.slice(1);
  return alert(newStr);
}
ucFirst('hi');

//7
function checkSpam(str){
  if(str.toLowerCase().includes('viagra') || 
  str.toLowerCase().includes('xxx'))
  {
    return alert(true);
  }
  return alert(false);
}
checkSpam("XXx");

//8
function truncate(str, maxlength){
  if(str.length>maxlength){
    return str.slice(0, maxlength-1)+'...';
  }
}
alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))

//9
function extractCurrencyValue(str){
    return str.slice(1);
}
alert(extractCurrencyValue('$120'));

//10
function sumInput(){
  let a =[];  
  while (true){
    let value=prompt('Input value');
    if(value==='' || value==null || 
    isNaN(parseInt(value, 10))===true){break;}
    a.push(+value);
  }
  let sum = 0;
  for(let values of a){
    sum+=values;
  }
  return sum;
}
alert(sumInput());

//11
function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { 
    partialSum += item; 
    maxSum = Math.max(maxSum, partialSum); 
    if (partialSum < 0) partialSum = 0; 
  }
  return maxSum;
}
alert(getMaxSubSum([-1, 2, 3, -9]))

//12
function checkAge(age) {
if (age > 18) {
return true;
} else {
// ...
return confirm('Родители разрешили?');
}
} 

//13
//оператор ?
function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}
//оператор ||
function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}

//14
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

//15
function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}
let x = prompt("x?", '');
let n = prompt("n?", '');
if (n < 1) {
  alert(`Введите натуральное число`);
} else {
  alert( pow(x, n) );
}

//16
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);

//17
function buy(){
   let parrot=3333, palm=8000, other=1750;
   let month=parrot-other;
   let time=palm/month;
  if(month*Math.floor(time)>=palm){
   return Math.floor(time);
  }
  else{
  return Math.floor(time)+1;
  }
}
alert(buy())

//18
function SumOfNegative()
{
    let sum = 0, arr=[];
    for(let i = 0; i < 3; i++) {
      arr[i]=prompt('input number');
      if(arr[i] < 0) sum += parseInt(arr[i]);
    }
    return sum;
}
alert(SumOfNegative());

//19
let fruits = ["Яблоки", "Груша", "Апельсин"];
// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");
// что в fruits?
alert( fruits.length ); // выведет 4, так как мы добавили "Банан" в массив и его длина увеличилась

//20
let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert( styles.shift() );
styles.unshift("Рэп", "Регги");

//21
let arr = ["a", "b"];
arr.push(function() {
alert( this );
})
arr[2](); // выведет a,b,function() {alert( this );} , так как к двум значения массива добавлена функция































