// JavaScript has a nature of single threaded but by using setTimeout function is basically performes in the browser:- 


setTimeout( () => {
    console.log(" Hello Mr Abhsihek Kamble ");
}, 2000);
setTimeout( () => {
    console.log(" I am learning MERN stack dev ");
}, 2000);

console.log(" I am working hard!!");