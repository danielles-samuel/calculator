let displayE1 = document.querySelector('.display_1');
let displayE2 = document.querySelector('.display_2');
let tempResultE1 = document.querySelector('.temp-result');
let numberE1 = document.querySelectorAll('.number');
let operation = document.querySelectorAll('.operation');
let equal = document.querySelector('.equal');
let dot = document.querySelector('.dot');
let zero = document.querySelector('.zero');
let allClear = document.querySelector('.all-clear');
let lastClear = document.querySelector('.last-entity-clear');


let dis1Num = ''; 
let dis2Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;


numberE1.forEach(number => {
    number.addEventListener('click', (e) => {
        if (e.target.innerText === '.' && !haveDot) {
            haveDot = true;
        } else if (e.target.innerText === '.' && haveDot) {
            return;
        }
        dis2Num += e.target.innerText;
        displayE2.innerText = dis2Num;
    })

});


operation.forEach(operation =>{
    operation.addEventListener('click', (e)=>{
        if (!dis2Num) result;
        haveDot = false;
        let operationName = e.target.innerText;
        if(dis1Num && dis2Num && lastOperation){
            mathOperation();
        }else{
            result = parseFloat(dis2Num);
        }
        clearVar(operationName);
        lastOperation = operationName;
        console.log(result);
    })
});

function clearVar(name = ''){
    dis1Num += dis2Num+ ' ' + name + ' ';
    displayE1.innerText = dis1Num;
    displayE2.innerText = '';
    dis2Num = '';
    tempResultE1.innerText = result;
}

function mathOperation(){
    if(lastOperation === 'X'){
        result = parseFloat(result) * parseFloat(dis2Num);
    }else if(lastOperation === '+'){
        result = parseFloat(result) + parseFloat(dis2Num);
    }else if(lastOperation === '-'){
        result = parseFloat(result) - parseFloat(dis2Num);
    }else if(lastOperation === '/'){
        result = parseFloat(result) / parseFloat(dis2Num);
    }else if(lastOperation === '%'){
        result = parseFloat(result) % parseFloat(dis2Num);
    }
}

equal.addEventListener('click', (e) =>{
    if(dis1Num && dis2Num === ' ') return;
    haveDot = false;
    mathOperation();
    clearVar();
    displayE2.innerText = result;
    tempResultE1.innerText = '';
    dis2Num = result;
    dis1Num = '';
});

allClear.addEventListener('click', (e)=>{
    displayE1.innerText = '0';
    displayE2.innerText = '0';
    dis1Num = '';
    dis2Num = '';
    result = '';
    tempResultE1.innerText = '0';
});

lastClear.addEventListener('click', (e) =>{
    displayE2.innerText = '';
    dis2Num = '';
});

window.addEventListener('keydown', (e) =>{
    if(
        e.key === '0' || 
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9' ||
        e.key === '.'
    ){
        clickButtonE1(e.key);
    }else if(
        e.key === '+' ||
        e.key === '-' ||
        e.key === '%' 
    ){
      clickOperation(e.key);  
    }else if(e.key === "*"){
        clickOperation('X');
    }else if(e.key == 'Enter' || e.key === "="){
        clickEqual();
    }
});

function clickButtonE1(key){
    numberE1.forEach( button => {
        if(button.innerText === key ){
            button.click();
        }
    })
}

function clickOperation(key){
    operation.forEach( button => {
        if(button.innerText === key){
            button.click()

        }
    })
}

function clickEqual(key){
    equal.click();
}


// echo "# calculator" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/danielles-samuel/calculator.git
// git push -u origin main

// git remote add origin https://github.com/danielles-samuel/calculator.git
// git branch -M main
// git push -u origin main