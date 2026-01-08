/** let h2 = document.querySelector("h1");

function colorChange(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h2.style.color = color;
            resolve("color changed");
        }, delay)
    });
}

colorChange("red", 1000)
    .then(() => {
        console.log(" Color has been changed to red")
        return colorChange("pink", 1000);
    })
    .then(() => {
        console.log(" Color has been changed to pink")
        return colorChange("grey", 1000);
    })
    .then(() => {
        console.log(" Color has been basically changed to grey")
        return colorChange("purple", 1000);
    })
    .then(() => {
        console.log(" Color has changed to purple");
    })
    .catch(() => {
        console.log("No cahnge in the color");

    }); **/


// Next operation focusing on btn using promises:- 
let btn = document.querySelector(".btn");

function animateOperation(text, color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            btn.innerText = text;
            btn.style.backgroundColor = color;
            resolve(" Btn text has changed");
        }, delay)
    });
};


btn.addEventListener("click", () => {


    animateOperation("hover MEE", "yellow", 1000)
        .then((result) => {
            console.log("Background Color has changes to yellow")
            console.log(" result to promise", result)
            return animateOperation("Welcome Sir", "pink", 1000);
        })
        .then((result) => {
            console.log(" Background Color has changes to pink")
            console.log("result to promise", result)
            return animateOperation("Coding!!", "green", 1000);
        })
        .then((result) => {
            console.log(" Background Color has changed to green ")
            console.log("result to promise", result)
            return animateOperation("Developer", "purple", 1000);
        })
        .then((result) => {
            console.log(" BackgroundColor has changes to purple")
            console.log("result to promise", result)
        })
        .catch((error) => {
            console.log(" Animation Failed for button");
            console.log(" It is an error", error);
        })

});