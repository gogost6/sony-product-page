const choseColor = document.querySelector(".chose-color");
const unionBlack = document.querySelector(".union.black");
const unionGray = document.querySelector(".union.gray");
const unionBlue = document.querySelector(".union.blue");

choseColor.addEventListener("mouseover", function (e) {
    const color = e.target.dataset.color;

    if(!color) {
        unionBlack.style.display = "none";
    }

    if (color === "black") {
        unionBlack.style.display = "block";
        unionBlue.style.display = "none";
        unionGray.style.display = "none";
    } else if (color === "gray") {
        unionGray.style.display = "block";
        unionBlack.style.display = "none";
        unionBlue.style.display = "none";
    } else if (color === "blue") {
        unionBlue.style.display = "block";
        unionBlack.style.display = "none";
        unionGray.style.display = "none";
    }
});

choseColor.addEventListener("mouseleave", function () {
    unionBlack.style.display = "none";
    unionBlue.style.display = "none";
    unionGray.style.display = "none";
});
