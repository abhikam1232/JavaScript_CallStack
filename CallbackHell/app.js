// Understanding callback hells:-

let h1 = document.querySelector("h1");

/** function changeColor(color, delay, nextColor) {
    setTimeout(() => {
        h1.style.color = color;
        if (nextColor) nextColor();
    }, delay);
}

changeColor("red", 1000, () => {
    changeColor("orange", 1000, () => {
        changeColor("purple", 1000, () => {
            changeColor("maroon", 1000, () => {
                changeColor("grey", 1000, () => {

                });
            });
        });
    });

}); **/


let h2 = document.querySelector("h2");

function changeAppear(colour, delay, nextColour) {
    setTimeout(() => {
        h2.style.color = colour;
        h2.style.fontSize = "2.5em";
        if (nextColour) nextColour();
    }, delay);


};

changeAppear("blue", 1500, () => {
    changeAppear("maroon", 1500, () => {
        changeAppear("purple", 1500, () => {
            changeAppear("green", 1500);

        });
    });
});

// js function to implement callback hells for animate:- 

function animateText(step, back,  delaay, nextStep){
    setTimeout( () => {
        h1.style.color = step;
        h1.style.backgroundColor = back;
        if (nextStep) nextStep();
    }, delaay);
};

animateText("lightblue", "blue", 1000, ()=> {
    animateText("maroon", "white", 1000, ()=> {
        animateText("black", "grey", 1000, ()=> {
            animateText("pink", "red", 1000);
        });
    });
});


