//1
let i = 3;
while (i) {
alert( i-- );
}  // будет отнимать от i единицу и выводить, пока i не станет равным 0

//2
let A=1, B=2, C=3;
 if(A<B && B<C){
    alert(A*2); 
    alert(B*2); 
    alert(C*2);
 }
 else{

    alert(-A); 
    alert(-B); 
    alert(-C);
 }

//3
let A=3, B=2, C=1;
 if((A<B && B<C) || (A>B && B>C)){
    alert(A*2); 
    alert(B*2); 
    alert(C*2);
 }
 else{
 
    alert(-A); 
    alert(-B); 
    alert(-C);
 }

//4
let A=2, B=6, C=5;
if(B<C){
  alert(B);
  alert(`расстояние = ${B-A}`);
}
else{
  alert('C');
  alert(`расстояние = ${C-A}`);
}

//5
let A = {
  Ox: 0,
  Oy: 0 
  };
  let x="Ox";
  let y="Oy";
  if(A[x]===0 && A[y]===0){alert(0);}
  else if(A[x]===0 && A[y]!==0){alert(2);}
  else if(A[x]!==0 && A[y]===0){alert(1);}
  else if(A[x]!==0 && A[y]!==0){alert(3);}

//6
let A = {
  Ox: 3,
  Oy: -2 
  };
  let x="Ox";
  let y="Oy";
  if(A[y]>0 && A[x]>0 ){alert(`1 ch`);}
  else if(A[y]>0 && A[x]<0){alert(`2 ch`);}
  else if(A[y]<0 && A[x]<0){alert(`3 ch`);}
  else if(A[y]<0 && A[x]>0){alert(`4 ch`);}

//7
  let Ax=0, Ay=1;
  let Bx=0, By=4;
  let Cx=5, Cy=4;
  alert(`D=(${Cx},${Ay})`); 

//8
let Year=2022;
if(Year%4===0 && Year%100===0 && Year%400===0){
  alert(`366 days`);
}
else{alert(`365 days`);}

//9
let A=0;
if(A%2===0 && A>0){ alert("четное положительное число");}
else if(A%2===0 && A<0){alert("четное отрицательное число");}
else if(A%2!==0 && A>0){alert("нечетное положительное число");}
else if(A%2!==0 && A<0){alert("нечетное отрицательное число");}
else if(A===0){alert("нулевое число");}

//10
let A=0 //rand(1,999);
let B='' + A;
let C=B.length;
if(C===1 && A%2===0 && A!==0){ alert("четное единичное число");}
else if(C===1 && A%2!==0){ alert("нечетное единичное число");}
else if(C===2 && A%2===0){ alert("четное двузначное число");}
else if(A%2!==0 && C===2){alert("нечетное двузначное число");}
else if(A%2===0 && C===3){alert("четное трехзначное число");}
else if(A%2!==0 && C===3){alert("нечетное трехзначное число");}
else if(A===0){alert("нулевое число")
               
               
//11 
let i = 0;
while (++i < 5) alert( i ); // выводит числа от 1 до 4, так как сравнение происзодит с 1
let i = 0;
while (i++ < 5) alert( i ); // выводит числа от 1 до 5, так как сравнение происзодит с 0

//12
for (let i = 0; i < 5; i++) alert( i );
for (let i = 0; i < 5; ++i) alert( i );
//выведутся одинаковые значение, так как увеличение числа происзодит уже после проверки               
               
//13
for(let i=2; i<=10; i++){
  alert(i);
}   
               
//14               
let i = 0; 
while(i < 3) {
alert( `number ${i}!` );
i++
}

//15               
let number=prompt("введите число > 100");
while(number<100 && number!==null){
  number=prompt(">100");
}    
               
//16               
let n = 10;
for (let i = 2; i <= n; i++) { 
  for (let j = 2; j < i; j++) { 
    if (i % j === 0)  i++; 
  }
  alert( i ); 
}               
               
//17               
let number1=prompt(`Input number 1:`), number2=prompt(`Input number 2:`);
let result=((+number1)+(+number2))/2;
alert(result);               
               
//18
let number1=prompt(`Input number 1:`);
let result=number1*number1;
alert(result);               
               
//19               
let number1=prompt(`Input number 1:`), number2=prompt(`Input number 2:`), 
number3=prompt(`Input number 3:`);
let max=Math.max(number1, number2, number3);
let min=Math.min(number1, number2, number3);
alert(max-min);              
               
//20               
let number1=prompt(`Input number 1:`);
if(number1%2===0){
  alert(`четное`);}
else{alert(`нечетное`);}               
               
//21               
let a=Math.floor(Math.random()*100);
let number= ''+a;
let secondDigit = a % 10, firstDigit = (a - secondDigit) / 10;    
let sum = secondDigit + firstDigit;
alert(`number of numbers in ${a} is ${number.length}`);
alert(`sum of ${a} = ${sum}`);               
               
//22               
let inch=prompt(`Input the number of inches`);
let sm=inch*2.54;
alert(` ${sm} sm`); 
               
//23               
let number=prompt(`Input three-digit number:`);
if(number%2===0){
 let digits = ("" + number).split("");
 let sum = 0;
 for( let i = 0; i < digits.length; i++ ) {
 sum += Number(digits[i]);
 }
 alert(sum);
}
else if(number%2!==0){
 let digits = ("" + number).split("");
 let mult = 1;
 for( let i = 0; i < digits.length; i++ ) {
 mult *= Number(digits[i]);
 }
 alert(mult);
}               
               
//24               
let A=prompt(`Input side length A:`),
    B=prompt(`Input side length B:`), 
    C=prompt(`Input side length C:`);
let a=+A, b=+B, c=+C;
if(a+b>c && a!==b!==c!==0){alert(`triangle turns out!`)}
else if(b+c>a && a!==b!==c!==0){alert(`triangle turns out!`)}
else if(c+a>b && a!==b!==c!==0){alert(`triangle turns out!`)}
else{alert(`triangle don't turns out!`)};               
               
//25               
let A= {
  Ax: 4,
  Ay: 9
};
let R = {
  Rx: 0,
  Ry: 0,
  radius: 10
};
let xA="Ax", yA="Ay", r="radius";
let result=Math.pow(A[xA],2)+Math.pow(A[yA],2);
if(Math.sqrt(result) < R[r]){
   alert(`A is in circle`)
}
else{ alert(`A isn't in circle`)}               
               
//26               
let user={};
user["name"] ='John';
user["surname"]='Smith';
user.name='Pete';
delete user["surname"];               
               
//27               
const user = {
  name: "John"
};
user.name = "Pete"; // значение измениттся, так как от изменения защищена сама константа, но не свойства внутри неё
               
//28               
let salaries = {
John: 100,
Ann: 160,
Pete: 130
}, a;
for(var key in salaries){
   a = false;
}
if(a!==false){alert(sum);}
else{
let sum=salaries.Ann+salaries.John+salaries.Pete;
alert(sum);
}               
               
//29               
let i = 0;
while (i !== 10) {
i += 0.2;
}//потому что числа будут хранится в бинарной форме и будут бесконечными               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               








































