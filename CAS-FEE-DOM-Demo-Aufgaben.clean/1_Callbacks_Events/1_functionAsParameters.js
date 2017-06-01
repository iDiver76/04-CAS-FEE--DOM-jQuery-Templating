function add(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function calc(fn, a, b) {
    console.log(fn(a, b));
}

calc(add, 3, 4);
calc(minus, 3, 4);

const opsMap = {
    '+': add,
    '-': minus
};

function calc2 (opStr, a, b) {
    const opFn = opsMap[opStr] || add;
    console.log( 'calc2', opFn(a, b) );
}

calc2('+', 3, 4);
calc2('-', 3, 4);

function createCalculator (opsMap2, calcName='Calulator') {
    return function (opStr, a, b) {
        const opFn = opsMap2[opStr] || add;
        console.log(calcName, opFn(a, b));
    };
}

const calculator = createCalculator({'+plus': add, '-minus': minus});

calculator('+plus', 3, 4);
calculator('-minus', 3, 4);


