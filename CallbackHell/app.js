// Understanding callback hells:-

let h1 = document.querySelector("h1");

function changeColor(color, delay, nextColor) {
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

});