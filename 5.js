//1
<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
</head>
<body>
<input type="button" id="hider" 
       value="Нажмите, чтобы спрятать
 текст" />
<div id="text">Текст</div>
<script>
  document.getElementById('hider').onclick = 
    function(){
      document.getElementById("text").style.display='none';
  }
</script>
</body>
</html>

//2
button.addEventListener("click", () => alert("1")); // выведет 1
button.removeEventListener("click", () => alert("1")); // не удалит обработчик, так как не написаны одинаковая функции в скобках
button.onclick = () => alert(2); // выведет 2

Итог: выведет сначала 1, потом 2

//3
let arr = ["HTML", "JavaScript", "CSS"];
function copySorted(arr){
  let array=arr.slice();
  return array.sort();
}
let sorted = copySorted(arr);
alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)

//4
function factorial(n){
  if(n==1) return n;
  else{
    return n*factorial(n-1);
  }
}

//5
function fib(n){
  let fib1=1, fib2=1;
  for(let i=3; i<=n; i++){
    let fib3 = fib1+fib2;
    fib1=fib2;
    fib2=fib3;
    fib3=fib1+fib2;
  }
  return fib2;
}
















