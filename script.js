const dis = document.querySelector("#display-screen");
let displayValue = "";

function add(x, y){
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
    document.querySelectorAll(".buttons").forEach(buttons => {
        buttons.addEventListener('click', () => {
            dv = buttons.firstChild.nodeValue;
            displayValue = displayValue + dv;
            displayVal(displayValue);
        });
    });
}

function displayVal(value, oper){
    dis.innerHTML = value;
    console.log(value);
    return value;
}

const addBtn = document.querySelector(".addOp");
const subBtn = document.querySelector(".subOp");
const multBtn = document.querySelector(".multOP");
const divBtn = document.querySelector(".divOp");
const equalBtn = document.querySelector(".equalOp");
const clearBtn = document.querySelector(".clearOp");

function addOperator(){
    let oper = "";
    addBtn.addEventListener('click', () => {
        if(addBtn.firstChild.nodeValue === "+"){
                addBtn.style.backgroundColor = 'black';
                addBtn.style.color = 'white';
                oper = oper + "+";
        }
    });
    console.log(oper);
}

function subOperator(){
    let oper = "";
    subBtn.addEventListener('click', () => {
        if(subBtn.firstChild.nodeValue === "+"){
                subBtn.style.backgroundColor = 'black';
                subBtn.style.color = 'white';
                oper += "+";
        }
    });
}

function multOperator(){
    let oper = "";
    multBtn.addEventListener('click', () => {
        if(multBtn.firstChild.nodeValue === "+"){
                multBtn.style.backgroundColor = 'black';
                multBtn.style.color = 'white';
                oper += "+";
        }
    });
}

function divOperator(){
    let oper = "";
    divBtn.addEventListener('click', () => {
        if(divBtn.firstChild.nodeValue === "+"){
                divBtn.style.backgroundColor = 'black';
                divBtn.style.color = 'white';
                oper += "+";
        }
    });
}

function equalOperator(){
    let oper = "";
    if(equalBtn.firstChild.nodeValue === "="){
        equalBtn.style.backgroundColor = 'black';
        equalBtn.style.color = 'white';
        oper += "=";
        setTimeout(function(){
            equalBtn.style.backgroundColor = 'white';
            equalBtn.style.color = 'black';
        }, 500);
    }
}

function clearOperator(){
    let oper = "";
    if(clearBtn.firstChild.nodeValue === "clear"){
        clearBtn.addEventListener('click', () => {
            clearBtn.style.backgroundColor = 'black';
            clearBtn.style.color = 'white';
            oper += "clear";
            setTimeout(function(){
                clearBtn.style.backgroundColor = 'white';
                clearBtn.style.color = 'black';
            }, 500);
            clear();
        });
    }
}

function clear(){
    dis.innerHTML = "";
    displayValue = "";
}

function main(){
    displayNum();
    addOperator();
    subOperator();
    equalOperator();
    clearOperator();
    operate();
}

main();