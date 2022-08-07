const dis = document.querySelector("#display-screen");
const addBtn = document.querySelector(".addOp");
const subBtn = document.querySelector(".subOp");
const multBtn = document.querySelector(".multOP");
const divBtn = document.querySelector(".divOp");
const equalBtn = document.querySelector(".equalOp");
const clearBtn = document.querySelector(".clearOp");
let displayValue = "";
let saveVal = "";
let newVal = "";
let operator = "";

function add(x, y){
    const result = Number(x) + Number(y);
    dis.innerHTML = result;
    reverseColor(addBtn);
}

function subtract(x, y){
    const result = Number(y) - Number(x);
    dis.innerHTML = result;
    reverseColor(subBtn);
}

function multiply(x, y){
    const result = Number(x) * Number(y);
    dis.innerHTML = result;
    reverseColor(multBtn);
}

function divide(x, y){
    const result = Number(y) / Number(x);
    dis.innerHTML = result;
    reverseColor(divBtn);
}

function operate(op, x, y){
    if (op === "+"){
        add(x, y);
    }
    if (op === "-"){
        subtract(x, y);   
    }
    if (op === "x"){
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
            dis.innerHTML = displayValue;
            saveValue(displayValue);
            clearOperator();
        });
    });
}

function saveValue(val){
    saveVal = val;
    return saveVal;
}

function newSaveVal(val){
    newVal = val;
    return newVal;
}

function newNum(val){
    displayValue = "";
    newSaveVal(val);
}

function reverseColor(btn){
    btn.style.backgroundColor = 'white';
    btn.style.color = 'black';
}

function addOperator(){
    if(addBtn.firstChild.nodeValue === "+"){
        addBtn.addEventListener('click', () => {
            addBtn.style.backgroundColor = 'black';
            addBtn.style.color = 'white';
            operator += "+";
            newNum(saveVal);
            return operator;
        });
    }   
}

function subOperator(){
    if(subBtn.firstChild.nodeValue === "-"){
        subBtn.addEventListener('click', () => {
            subBtn.style.backgroundColor = 'black';
            subBtn.style.color = 'white';
            operator += "-";
            newNum(saveVal);
            return operator;
        });
    }

}

function multOperator(){
    if(multBtn.firstChild.nodeValue === "x"){
        multBtn.addEventListener('click', () => {
            multBtn.style.backgroundColor = 'black';
            multBtn.style.color = 'white';
            operator += "x";
            newNum(saveVal);
            return operator;
        });
    }
}

function divOperator(){
    if(divBtn.firstChild.nodeValue === "/"){
        divBtn.addEventListener('click', () => {
            divBtn.style.backgroundColor = 'black';
            divBtn.style.color = 'white';
            operator += "/";
            newNum(saveVal);
            return operator;
        });
    }
}

function equalOperator(){
    addOperator();
    subOperator();
    multOperator();
    divOperator();
    equalBtn.addEventListener('click', () => {
        if(equalBtn.firstChild.nodeValue === "="){
            equalBtn.style.backgroundColor = 'black';
            equalBtn.style.color = 'white';
            operate(operator, saveVal, newVal);
            setTimeout(function(){
                equalBtn.style.backgroundColor = 'white';
                equalBtn.style.color = 'black';
            }, 500);
        }
    });
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
    operator = "";
    saveVal = "";
    newVal = "";
}

function main(){
    displayNum();
    equalOperator();
}

main();