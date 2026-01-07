
/** function SavetoBase(data, success, failure) {
    let internet = Math.floor(Math.random() * 10) + 1;
    console.log(internet);

    if (internet > 4) {
        success();
    } else {
        failure();
    };

};

SavetoBase("Apna College", () => {
    console.info(" Success: Your data is Saved",);
    SavetoBase("hello world", () => {
        console.log(" Success2: Data2 was successfully Saved");
        SavetoBase(" Welcome to coding", () => {
            console.log("Success3: Data3 was Saved");
        },
            () => {
                console.log(" failure3: u have a weak server3");
            });
    },
        () => {
            console.log("Failure2: U have a weak Server2");
        })
},
    () => {
        console.log(" Failure: U have a weak Server");
    }
); **/


/** processOrder("Order Placed", 
    () => {
        console.log("Success1: Order placed successfully");

        processOrder("Payment Processed",
            () => {
                console.log("Success2: Payment processed successfully");

                processOrder("Order Packed",
                    () => {
                        console.log("Success3: Order packed successfully");

                        processOrder("Order Shipped",
                            () => {
                                console.log("Success4: Order shipped successfully");
                            },
                            () => {
                                console.log("Failure4: Shipping failed");
                            }
                        );
                    },
                    () => {
                        console.log("Failure3: Packing failed");
                    }
                );
            },
            () => {
                console.log("Failure2: Payment failed");
            }
        );
    },
    () => {
        console.log("Failure1: Order placement failed");
    }
); **/

/** function processOrder(data) {
    return new Promise( (resolve, reject) =>{
        let network = Math.floor(Math.random() * 10)+1;
        if (network >= 5){
            resolve("success: Order has been placed");
        } else{
            reject("failure: Order has been basically Rejected");
        }
    });
};


processOrder("order data")
    .then((msg) => {
        console.log(msg);
    })
    .catch((err) => {
        console.log(err);
    }); **/

/** function saveToDB(data) {
    return new Promise((resolve, reject) => {
        let netSpeed = Math.floor(Math.random() * 10) + 1;
        if (netSpeed >= 5) {
            resolve();
        } else {
            reject();
        }
    });
};

saveToDB("Apna collgege")
    .then(() => {
        console.log("Promise was resolved");
    })
    .catch(() => {
        console.log("Promise was Rejected");
    }); **/



// Another demo question to fetch a user data using promises:- 

function fetchUserData(user) {
    return new Promise((resolve, reject) => {
        let val = Math.floor(Math.random() * 10) + 1;
        console.log(val);

        if (val >= 6) {
            resolve();
        } else {
            reject();
        }
    });

};

fetchUserData("data is getting Loaded")
    .then(() => {
        console.log(" Data has been sucessfully fetched!!");
    })
    .catch(() => {
        console.info(" Data has Not sucessfully fteched!!!");
    });


// upload file using promises!!! 

function uploadFile(file) {
    return new Promise((resolve, reject) => {
        let load = Math.floor(Math.random() * 10) + 1;
        if (load >= 4) {
            resolve();
        } else {
            reject();
        }

    });
};

uploadFile("File is loading")
    .catch(() => {
        console.info(" File has been uploaded successfully!!");
    })
    .then(() => {
        console.info(" File has not yet Loaded Successfully");
    });

// Login user:- 

function loginUser(user, pass) {
    return new Promise((resolve, reject) => {
        if (user == "admin" && pass == "1234") {
            resolve;
        } else {
            reject();
        }
    });

};

loginUser("admin", "1234")
    .catch(() => {
        console.info(" User has sucessfully Logged In the Page");
    })
    .then(() => {
        console.info(" User Failed Login!! ");
    });


/** function loginUser(user, pass) {
    return new Promise((resolve, reject) => {
        if (user === "admin" && pass === "1234") {
            resolve();
        } else {
            reject();
        }
    });
}

loginUser("admin", "1234")
    .then(() => {
        console.info("User has successfully logged in ✅");
    })
    .catch(() => {
        console.info("User failed to login ❌");
    }); **/
