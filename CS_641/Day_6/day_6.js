// Diff ways to invoke function

const squareRt = a => {
    console.log(this);
    return a * a;
};

squareRoot = function (a) {
    console.log(this);
    console.log("hello");

    return a * a;
};

console.log(squareRt);

console.log("Hello calling func square Rt");
console.log(squareRoot());

