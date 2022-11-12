'use strict';

function makeFibonacciFunction() {
    let num2 = 1
    let num1 = 0

    const fibonacci = document.getElementById('button');
    fibonacci.addEventListener('click', () => {
        num2 = num2 + num1
        num1 = num2 - num1
        console.log(num2)
        document.getElementById('fibonacciNumber').innerText = num2;
    })
};
makeFibonacciFunction()



