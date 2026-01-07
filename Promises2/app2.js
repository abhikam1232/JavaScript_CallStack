// Create a function registerUser(step) that returns a Promise:- 

function registerUser(step) {
    return new Promise((resolve, reject) => {
        let val = Math.floor(Math.random() * 10) + 1;
        if (val >= 7) {
            resolve("Regustration completed Sucessfully");
        } else {
            reject("Registration Failed");
        }
    });

};

registerUser("Welcome to the world of coding")
    .then((result) => {
        console.log("Validate User")
        console.log("result of the promise", result);
        return registerUser("User Data is Drafter here !!!");
    })
    .then((result) => {
        console.log(" User Data has been Saved Sucessfully")
        console.log("result of the promise", result);
        return registerUser("Send Welcome Email");
    })
    .then((result) => {
        console.log(" Email has been Registered Sucessfully")
        console.log("result of the promise", result);
    })
    .catch(() => {
        console.info(" Step has been Failed Sucessfully");
    })