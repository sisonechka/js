let myWindow = window.open("", "_self");
function numbers(){
    let min=Number(document.getElementById("min").value);
    let max=Number(document.getElementById("max").value);
    let amount=Number(document.getElementById("amount").value);
    let arr=[];
    for(let i=0; i<amount; i++){
        arr[i]=Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return myWindow.document.write("<h1 style='color:purple'>Random Integer Generator</h1><p>Here are your random numbers:<p>"+
        arr);
}
function resetAll(){
    document.getElementById('min').value ='';
    document.getElementById('max').value ='';
    document.getElementById('amount').value ='';
}
function back(){
    myWindow.close();
}
