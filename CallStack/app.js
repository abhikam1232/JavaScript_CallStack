 function work(){
    console.log(" Today's tasks have started executing!!! ");
    console.log(" This is the work function !! ");
}

function fun() {
    console.log(" This is fun function calls work ");
    work();
}

console.log(" Second function implemented ");
fun();
console.log(" Functions Implemented");

/** 
// Second Assignmnet Ques:- 
function first() {
    console.log(" Inside first() ");
    second();
}

function second() {
    console.log("Inside second() ");
    third();
}

function third() {
    console.log(" Inside third() ");
}


console.log(" Program has been started");
first();
console.log("program Ended !!");


// Third call stack implemented:- 


/** function one() {
    return 1; // This function is just returning one value which is "1"
}

function two() {
    return one() + one(); // This function is just adding the value 1+1 = 2
}

function three() {
    let ans = two() + one();
    console.log(ans);
}

three(); **/

// Javascript call stack using breakpoints:- 

function ten() {
    return 10;
}

function twenty() {
    return ten() + ten();
}

function thirty() {
    let answer = twenty() + ten();
    console.log(answer);
}

thirty();