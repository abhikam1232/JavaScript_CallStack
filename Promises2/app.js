/** let item = prompt(" Enter the food item");

function orderFood() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (item == "pizza") {
                resolve();
            } else {
                reject();
            }
        }, 1000);
    })
};

orderFood()
    .then(() => {
        console.log(" Online food has basically Ordered Successfully");
    })
    .catch(() => {
        console.log("Online food has not ordered");
    });
 **/
// Save the data to the data Base:- 
function SaveDataBase(data) {
    return new Promise((resolve, reject) => {
        let num = Math.floor(Math.random() * 10) + 1;
        if (num >= 6) {
            resolve();
        } else {
            reject();
        }
    })
};

SaveDataBase(" Data Processing ")
    .then(() => {
        console.info(" Data 1:  Saved SuccessFully")
        return SaveDataBase(" Heading for Data 2");
    })
    .then(() => {
        console.info(" Data 2: Saved SuccessFully")
        return SaveDataBase("Heading for Data 3");
    })
    .then(() => {
        console.log(" Data 3:  Saved SuccessFully")
    })
    .catch(() => {
        console.info(" Data not NOT YET Saved!!");
    });

// Another Promise:- 

function onlineOrder(step) {
    return new Promise((resolve, reject) => {
        let val = Math.floor(Math.random() * 10) + 1;
        if (val >= 5) {
            resolve();
        } else {
            reject();
        }
    });
};

onlineOrder("1st step")
    .then(() => {
        console.info(" Order Placed")
        return onlineOrder(" 2nd order");
    })
    .then(() => {
        console.info(" Payment processed")
        return onlineOrder("3rd step");
    })
    .then(() => {
        console.info(" order Delivered");
    })
    .catch(() => {
        console.info(" ORDER FAILED ")
    });

