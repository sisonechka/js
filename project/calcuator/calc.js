function input(num){
    document.form.textview.value=document.form.textview.value + num;
}
function resetCalc(){
    document.form.textview.value ='';
}
function output(){
    let start = document.form.textview.value;
    if(start){
        document.form.textview.value = eval(start);
    }
}
