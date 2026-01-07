let h2 = document.querySelector("h1");

function changeColor(color, delay) {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            h2.style.color = color;
            resolve("color changed");
        }, delay)
    });
}