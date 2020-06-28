function getNumber(num){
    var result = document.getElementById("display");
    result.value += num;
}

function clearNumber(){
    var result = document.getElementById("display");
    result.value = "";
}

function getResult(){
    var result = document.getElementById("display");
    result.value = eval(result.value);
}