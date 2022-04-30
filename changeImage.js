const mainImg = document.querySelector(".main-img");
const allPreview = document.querySelectorAll('.preview-img-wrapper');

const change = (e) => {
    mainImg.src = e.children[0].src;
}