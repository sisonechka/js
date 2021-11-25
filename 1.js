//1
let admin, name='Sofiia';
admin=name;
alert (admin);
//2
//Можно использовать названия с большими буквами как в обоих переменных, так и в каждой по отдельности
//3
let name1 = "Ilya";
alert( `hello ${1} `); // hello 1
alert( `hello ${"name"} `); // hello name
alert( `hello ${name1} `); // hello Ilya
//4
""+1+0; // =10
""-1+0; //=-1
true+false; //1
6/ "3"; //2
"2"*"3"; //6
4+5+"px"; //9px
"$"+4+5; //$45
"4"-2; //2
"4px"-2; //NaN
7/0; //Infinity
" -9 "+5; // -9 5
" -9 "-5; // -14
null+1; //1
undefined+1; //NaN

//5
let a = 1, b = 1;
let c = ++a; // 2
let d = b++; // 1
//6
let a = 2;
let x = 1 + (a *= 2); //x=5 , a=4
//7
5 > 4; //true
"ананас" > "яблоко"; //false
"2" > "12"; //true
undefined == null; //true
undefined === null; //false
null == "\n0\n"; //false
null === +"\n0\n"; //false
//8
let name=prompt('Whats your name?');
alert(`Your name is ${name}`);
//9
не выведет
//10
let nameJS=prompt("Каково «официальное» название JavaScript?");
if(nameJS=="ECMAScript"){
alert("Right!");
}
else{
  alert("Не знаете? ECMAScript!");
};

//11
let number=prompt("Write a number");
if(number>0){ alert(1);}
else if(number<0){alert(-1);}
else if(number==='0'){alert(0);} 
else{alert("error: you don't write a number!")};
//12
alert( null || 2 || undefined ); //2
//13
alert( alert(1) || 2 || alert(3) ); //1 и потом 2
//14
alert( 1 && null && 2 ); //null
//15
alert( alert(1) && alert(2) ); //1 и потом undefined
//16
alert( null || 2 && 3 || 4 ); //3
//17
let age=6;
if(age<=90 && age>=14){
  alert(true);
}
//18
let age=4
//a
if(!(age<=90 && age>=14)){
  alert(true);  
}
//b
if(age>=90 || age<=14){
  alert(true);
}
//20
let string=prompt("Who's there?");  
if(string==="Админ"){
  let password=prompt("Password?");
  if(password==="Я Главный"){
    alert("Здравствуйте!");
  }
  else if(password==null){
    alert("Отменено");
  }
  else{alert("Неверный пароль")}
}
else if(string==null){
  alert("Отменено");
}
else{
  alert("Я вас не знаю");
}
//21
let a = prompt('a?', '');  
switch(a){
case '0' : 
alert( '0' );
break;  
case '1' : 
alert( '1' );
break;
case '2':
alert( '2,3' );
break;
case '3' :
alert( '2,3' );
break;
}
//22
let number=1;
if(number>0){ 
  alert(++number);
  }
else{alert(number);}
//23
let number=-1;
if(number>0){ 
  alert(++number);
  }
else{alert(number-=2);}
//24
let number=-3;
if(number>0){ 
  alert(++number);
  }
else if(number<0){alert(number-=2);}
else{
  number=10;
  alert(number);
  }
//25
let a=-3, b=1, c=-6, plus=0;
if(a<0 && b<0 && c<0){alert(plus);}
else if((a>0 && b<0 && c<0) || (b>0 && a<0 && c<0) 
|| (c>0 && a<0 && b<0)){ 
  alert(++plus);
}
else if((a>0 && b>0 && c<0) || (b>0 && a<0 && c>0) 
|| (c>0 && a>0 && b<0)){
  alert(plus+=2);
}
else{alert(plus+=3);}
//26
let a=-3, b=-1, c=-6, plus=0, minus=0;
if(a<0 && b<0 && c<0){ 
  alert(`Положительных чисел - ${plus}`);
  alert(`Отрицательных чисел - ${minus+=3}`);
}
else if((a>0 && b<0 && c<0) || (b>0 && a<0 && c<0) 
|| (c>0 && a<0 && b<0)){ 
  alert(`Положительных чисел - ${++plus}`);
  alert(`Отрицательных чисел - ${minus+=2}`);
}
else if((a>0 && b>0 && c<0) || (b>0 && a<0 && c>0) 
|| (c>0 && a>0 && b<0)){
  alert(`Положительных чисел - ${plus+=2}`);
  alert(`Отрицательных чисел - ${++minus}`);
}
else{
  alert(`Положительных чисел - ${plus+=3}`);
  alert(`Отрицательных чисел - ${minus}`);
}
//27
let a=1, b=2;
if(a>b){
    alert(a);
}
else if(a<b){
    alert(b);
}
//28
let a=10, b=2;
if(a>b){
    alert(`Bigger - ${a}`);
    alert(`Lower - ${b}`);
}
else if(a<b){
    alert(`Bigger - ${b}`);
    alert(`Lower - ${a}`);
}
//29
let A=1/2, B=1/10;
if(A<B){
    alert(`A=${A}`);
    alert(`B=${B}`);
}
else if(A>B){
    b=B;
    a=A;
    alert(A=b);
    alert(B=a);
}
//30
let A=1/2, B=4/2;
if(A!=B){
    alert(`A=${A+B}`);
    alert(`B=${A+B}`);
}
else if(A==B){
    alert(`A=${A=0}`);
    alert(`B=${B=0}`);
}
//31
let A=3/2, B=1/2;
if(A!=B){
    if(A<B){
        A=B;
    alert(`A=${A}`);
    alert(`B=${B}`);
    }
    else if(A>B){
    B=A;
    alert(`A=${A}`);
    alert(`B=${B}`);
    }
}
else if(A==B){
    alert(`A=${A=0}`);
    alert(`B=${B=0}`);
}
//32
let a=-30, b=-10, c=-6;
if(a<b  && a<c){ 
  alert(a);
}
if(b<a  && b<c){ 
  alert(b);
}
if(c<b  && c<a){ 
  alert(c);
}
//33
let a=-9, b=-10, c=-6;
if(a<b  && b<c){ 
  alert(b);
}
if(b<a  && a<c){ 
  alert(a);
}
if(b<c  && c<a){ 
  alert(c);
}
//34
let a=-9, b=-10, c=-6;
if(a<b  && b<c){ 
  alert(`Lower - ${a}`); 
  alert(`Bigger - ${c}`);
}
if(b<a  && a<c){ 
  alert(`Lower - ${b}`); 
  alert(`Bigger - ${c}`);
}
if(b<c  && c<a){ 
  alert(`Lower - ${b}`); 
  alert(`Bigger - ${a}`);
}
//35
let a=-9, b=-10, c=-6;
if(a<b  && b<c){ 
  alert(b+c); 
}
if(b<a  && a<c){ 
  alert(a+c); 
}
if(b<c  && c<a){ 
  alert(a+c); 
}
//36
let a=0, b=c=-6;
if(a==b  && a!=c){
    alert(3);
}
if(a==c  && a!=b){
    alert(2);
}
if(c==b  && c!=a){
    alert(1);
}