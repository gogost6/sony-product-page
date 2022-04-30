let allMainImages = Array.from(document.querySelectorAll(".main-img"));
let allPreview = document.querySelectorAll('.preview-img-wrapper');

const change = (e) => {
    allMainImages = Array.from(document.querySelectorAll(".main-img"));
    const index = e.dataset.img;
    e.classList.add('border');
    
    for (let i = 0; i < allPreview.length; i++) {
        allPreview = document.querySelectorAll('.preview-img-wrapper');
        const element = allPreview[i];
        
        if(element.dataset.img != index) {
            element.classList.remove('border');
        }
    }

    const mainImg = allMainImages.find(x => x.dataset.main === index);
    mainImg.classList.add('current');

    for (let i = 0; i < allMainImages.length; i++) {
        allMainImages = Array.from(document.querySelectorAll(".main-img"));
        const element = allMainImages[i];

        if(element.dataset.main != index) {
            element.classList.remove('current');    
        }
    }
}