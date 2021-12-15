//1
<html>
  <body>
    <div id="elem">Пользователи:</div>
    <ul>
<li>Джон</li>
<li>Пит</li>
</ul>  
    <script>
      alert(document.body.children[0]); //код, который получит элемент <div>
      alert(document.body.children[1]); //код, который получит элемент <ul>
      alert(document.body.children[1].children[1]); //код, который получит элемент <li>
    </script>
  </body>
</html>

//2
<html>
<head>
<style>
td {
      border: 1px solid black;
      padding: 1px 1px;
    }
</style>
</head>
  <body>
    <table id="table">
      <tr>
        <td>1:1</td>
        <td>2:1</td>
        <td>3:1</td>
        <td>4:1</td>
        <td>5:1</td>
      </tr>
       <tr>
        <td>1:2</td>
        <td>2:2</td>
        <td>3:2</td>
        <td>4:2</td>
        <td>5:2</td>
      </tr>
      <tr>
        <td>1:3</td>
        <td>2:3</td>
        <td>3:3</td>
        <td>4:3</td>
        <td>5:3</td>
      </tr>
      <tr>
        <td>1:4</td>
        <td>2:4</td>
        <td>3:4</td>
        <td>4:4</td>
        <td>5:4</td>
      </tr>
      <tr>
        <td>1:5</td>
        <td>2:5</td>
        <td>3:5</td>
        <td>4:5</td>
        <td>5:5</td>
      </tr>
    </table>
    <script>
    for(let i=0; i<table.rows.length; i++){
  let td=table.rows[i].cells[i]; td.style.backgroundColor='red';
    }
    </script>
  </body>
</html>

//3
1)let table=document.getElementById('age-table');
2)let inputs=table.getElementsByTagName('label');
3)let firstElem=table.rows[0].cells[0]; 
or 
let firstElem=table.querySelector('td');
4)let form=document.querySelector('form[name="search"]');
5)let firstInput=form.querySelector('input');
6)let lastInput=form.querySelectorAll('input');
lastInput[lastInputs.length-1];

//4
<ol id="elem">
<li>Привет</li>
<li>Мир</li>
</ol>
<script>
function clear(elem) {
elem.innerHTML = null;
}
clear(elem); // очищает список
</script>
</body>
</html>

//5






































