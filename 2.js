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
               











































