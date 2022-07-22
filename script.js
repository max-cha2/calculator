const dis = document.querySelector("#display-screen");
const addBtn = document.querySelector(".addOp");
const subBtn = document.querySelector(".subOp");
const multBtn = document.querySelector(".multOP");
const divBtn = document.querySelector(".divOp");
const equalBtn = document.querySelector(".equalOp");
const clearBtn = document.querySelector(".clearOp");
let displayValue = "";
let saveVal = "";

function add(x, y){
    console.log(parseInt(x + y));
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

function operate2(value){
    for (let i = 0; i < value.length; i++){
        if (value[i] === "+"){
            let first = value.slice(0, i);
            let second = value.slice(i, i-1);
            add(first, second);
        }
    }
}

function displayNum(){
    let dv = "";
    document.querySelectorAll(".buttons").forEach(buttons => {
        buttons.addEventListener('click', () => {
            dv = buttons.firstChild.nodeValue;
            displayValue = displayValue + dv;
            dis.innerHTML = displayValue;
            if (buttons.firstChild.nodeValue === "+"){
                buttons.style.backgroundColor = 'black';
                buttons.style.color = 'white';
                operate2(displayValue);
            }
        });
    });
}

function saveValue(val){
    saveVal = val;
    console.log(val);
    return saveVal;
}


function addOperator(){
    let oper = "";
    addBtn.addEventListener('click', () => {
        if(addBtn.firstChild.nodeValue === "+"){
                addBtn.style.backgroundColor = 'black';
                addBtn.style.color = 'white';
                oper = oper + "+";
                return oper;
        }
    });

}

function subOperator(){
    let oper = "";
    subBtn.addEventListener('click', () => {
        if(subBtn.firstChild.nodeValue === "-"){
            subBtn.style.backgroundColor = 'black';
            subBtn.style.color = 'white';
            oper += "+";
            return oper;
        }
    });
}

function multOperator(){
    let oper = "";
    multBtn.addEventListener('click', () => {
        if(multBtn.firstChild.nodeValue === "*"){
            multBtn.style.backgroundColor = 'black';
            multBtn.style.color = 'white';
            oper += "+";
            return oper;
        }
    });
}

function divOperator(){
    let oper = "";
    divBtn.addEventListener('click', () => {
        if(divBtn.firstChild.nodeValue === "/"){
            divBtn.style.backgroundColor = 'black';
            divBtn.style.color = 'white';
            oper += "+";
            return oper;
        }
    });
}


    equalBtn.onclick() = function(){
        let i = 0;
        interval = setInterval(() => {
            console.log(i++);
        }, interval);
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
    equalOperator();
}

main();