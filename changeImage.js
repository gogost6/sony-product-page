const previewContainer = document.querySelector(".preview-container");
const mainImg = document.querySelector(".main-img");

document.addEventListener('click', function(e) {
    let el = e.target;
    let index;

    if(el.dataset.index) {
        index = el.dataset.index;
    } else if (el.className === "preview-img-wrapper") {
        index = el.children[0].dataset.index;
    } else {
        index = 6;
    }

    mainImg.src = `./assets/Sony ${index}.png`;
});