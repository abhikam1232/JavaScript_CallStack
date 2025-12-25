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