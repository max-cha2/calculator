const dis = document.querySelector("#display-screen");
let displayValue = "";

function add(x, y){
    x = displayValue;
    return parseInt(x + y);
}

function subtract(x, y){
    return parseInt(x - y);
}

function multiply(x, y){
    return parseInt(x * y);
}

function divide(x, y){
    return parseInt(x / y);
}

function operate(op, x, y){
    if (op === "+"){
        add(x, y);
    }
    if (op === "-"){
        subtract(x, y);   
    }
    if (op === "*"){
        multiply(x, y);
    }
    if (op === "/"){
        divide(x, y);
    }
}

function displayNum(){
    let dv = "";
    document.querySelectorAll(".buttons").forEach(item => {
        item.addEventListener('click', () => {
            if(item.firstChild.nodeValue === "1"){
                displayValue = displayValue + '1';
                dis.innerHTML = displayValue;
            }
            if(item.firstChild.nodeValue === "2"){
                displayValue = displayValue + '2';
                dis.innerHTML = displayValue;
            }
            if(item.firstChild.nodeValue === "3"){
                displayValue = displayValue + '3';
                dis.innerHTML = displayValue;
            }
            if(item.firstChild.nodeValue === "4"){
                displayValue = displayValue + '4';
                dis.innerHTML = displayValue;
            }
            if(item.firstChild.nodeValue === "5"){
                displayValue = displayValue + '5';
                dis.innerHTML = displayValue;
            }
            if(item.firstChild.nodeValue === "6"){
                displayValue = displayValue + '6';
                dis.innerHTML = displayValue;
            }
            if(item.firstChild.nodeValue === "7"){
                displayValue = displayValue + '7';
                dis.innerHTML = displayValue;
            }
            if(item.firstChild.nodeValue === "8"){
                displayValue = displayValue + '8';
                dis.innerHTML = displayValue;
            }
            if(item.firstChild.nodeValue === "9"){
                displayValue = displayValue + '9';
                dis.innerHTML = displayValue;            }
            if(item.firstChild.nodeValue === "0"){
                displayValue = displayValue + '0';
                dis.innerHTML = displayValue;
            }
            console.log(displayValue);
        });
    });
    return dv;
}

function operators(){
    let oper = "";
    document.querySelectorAll("#op").forEach(item => {
        item.addEventListener('click', () => {
            if(item.firstChild.nodeValue === "+"){
                item.style.backgroundColor = 'black';
                item.style.color = 'white';
                oper += "+";
                add(displayValue, displayValue)
            }
            if(item.firstChild.nodeValue === "-"){
                item.style.backgroundColor = 'black';
                item.style.color = 'white';
                oper += "-";
            }
            if(item.firstChild.nodeValue === "x"){
                item.style.backgroundColor = 'black';
                item.style.color = 'white';
                oper += "x";
            }
            if(item.firstChild.nodeValue === "/"){
                item.style.backgroundColor = 'black';
                item.style.color = 'white';
                oper += "/";
            }
            if(item.firstChild.nodeValue === "="){
                item.style.backgroundColor = 'black';
                item.style.color = 'white';
                oper += "=";
                setTimeout(function(){
                    item.style.backgroundColor = 'white';
                    item.style.color = 'black';
                }, 500);
            }
            if(item.firstChild.nodeValue === "clear"){
                item.style.backgroundColor = 'black';
                item.style.color = 'white';
                oper += "clear";
                setTimeout(function(){
                    item.style.backgroundColor = 'white';
                    item.style.color = 'black';
                }, 500);
                clear();
            }
            return oper;
        });
    });
}

function clear(){
    dis.innerHTML = "";
    displayValue = "";
}

function main(){
    console.log(displayNum());
    operators();
    operate();
}

main();