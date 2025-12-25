function work(){
    console.log(" Today's tasks have started executing!!! ");
    console.log(" This is the work function !! ");
}

function fun() {
    console.log(" This is fun function call work ");
    work();
}

console.log(" This function is calling fun function");
fun();
