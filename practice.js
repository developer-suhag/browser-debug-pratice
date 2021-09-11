// ------------------>> 3 <<-----------------------------
/* 
function timeOut() {
    console.log('Hello');
}

function interval() {
    console.log('Tik Tik Tik');
}

setTimeout(() => {
    timeOut()
}, 500);

setTimeout(timeOut, 2000);

setInterval(() => {
    interval()
}, 1000); */

// ------------------>> 9 <<-----------------------------

const obj = {
    name: 'Suhag',
    age: '21',
    codeEditor: 'VS Code',
}

const objJSON = JSON.stringify(obj);

sessionStorage.setItem('user', objJSON)

const getObj = sessionStorage.getItem('user');
const objParse = JSON.parse(getObj)
// console.log(objParse);


// ------------------>> 12 <<-----------------------------

const sum = (x, y) => {
    // console.log(x, y);
    const add = x + y;
    const multipy = x * y;
    return add + multipy;
}

const result = sum(5, 10)
// console.log(result);