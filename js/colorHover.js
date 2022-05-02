const choseColor = document.querySelector(".chose-color");
const unionBlack = document.querySelector(".union.black");
const unionGray = document.querySelector(".union.gray");
const unionBlue = document.querySelector(".union.blue");

const colorImgWrapper = document.querySelectorAll('.color-img-wrapper');

choseColor.addEventListener("click", function (e) {
    const color = e.target.dataset.color;

    if (color === "black") {
        if (unionBlack.className === 'union black') {
            unionBlack.style.display = "block";
            unionBlack.classList.add('clicked');
            unionBlue.style.display = "none";
            unionBlue.classList.remove('clicked');
            unionGray.style.display = "none";
            unionGray.classList.remove('clicked');
        } else {
            unionBlack.style.display = "none";
            unionBlack.classList.remove('clicked');
            unionBlue.style.display = "none";
            unionGray.style.display = "none";
        }
    } else if (color === "gray") {
        if (unionGray.className === 'union gray') {
            unionGray.style.display = "block";
            unionGray.classList.add('clicked');
            unionBlack.style.display = "none";
            unionBlack.classList.remove('clicked');
            unionBlue.style.display = "none";
            unionBlue.classList.remove('clicked');
        } else {
            unionGray.style.display = "none";
            unionGray.classList.remove('clicked');
            unionBlack.style.display = "none";
            unionBlue.style.display = "none";
        }
    } else if (color === "blue") {
        if (unionBlue.className === 'union blue') {
            unionBlue.style.display = "block";
            unionBlue.classList.add('clicked');
            unionBlack.style.display = "none";
            unionBlack.classList.remove('clicked');
            unionGray.style.display = "none";
            unionGray.classList.remove('clicked');
        } else {
            unionBlue.style.display = "none";
            unionBlue.classList.remove('clicked');
            unionBlack.style.display = "none";
            unionGray.style.display = "none";
        }
    }
});

const isClicked = (str) => str.includes('clicked');

choseColor.addEventListener("mouseover", function (e) {
    const color = e.target.dataset.color;

    if (color === "black") {
        unionBlack.style.display = "block";
        if(!isClicked(unionGray.className)) {
            unionGray.style.display = 'none';
        }

        if (!isClicked(unionGray.className)) {
            unionGray.style.display = 'none';
        }
    }

    if (color === "gray") {
        unionGray.style.display = "block";
        if (!isClicked(unionBlack.className)) {
            unionBlack.style.display = 'none';
        }

        if (!isClicked(unionBlue.className)) {
            unionBlue.style.display = 'none';
        }
    }

    if (color === "blue") {
        unionBlue.style.display = "block";
        if (!isClicked(unionBlack.className)) {
            unionBlack.style.display = 'none';
        }

        if (!isClicked(unionGray.className)) {
            unionGray.style.display = 'none';
        }
    }
});

choseColor.addEventListener("mouseleave", function (e) {
    if (unionBlack.className !== 'union black clicked') {
        unionBlack.style.display = "none";
    }

    if (unionBlue.className !== 'union blue clicked') {
        unionBlue.style.display = "none";
    }

    if (unionGray.className !== 'union gray clicked') {
        unionGray.style.display = "none";
    }
});
