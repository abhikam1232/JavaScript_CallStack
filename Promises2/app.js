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

SaveDataBase("Saving to DataBase")
    .then(() => {
        console.info("Data 1: has been Successfully Saved");
        SaveDataBase(" Loading for Another one")
            .then(() => {
                console.info(" Data 2: was successfuly saved!!");
            });
    })
    .catch(() => {
        console.log(" Data Storing Failed");
    });

