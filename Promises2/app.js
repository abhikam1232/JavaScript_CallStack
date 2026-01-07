let item = prompt(" Enter the food item");

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
