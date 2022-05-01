const dropBtn = () => {
    const el = document.createElement('i');
    el.className = "fa-solid fa-grip-lines";
    el.style.fontSize = '30px';
    el.style.color = 'white';
    el.style.cursor = 'pointer';
    return el;
}

const container = document.querySelector('.container');
const mainImgContainer = document.querySelector('.main-img-wrap');
const searchContainer = document.querySelector('.search-container');
const sonyCenter = document.querySelector('.sony-center');
const descriptionContainer = document.querySelector('.description-container');
const contactsWrapper = document.querySelector('.contacts-wrapper');
const features = document.querySelector('.features-container');
const featureWrap = document.querySelectorAll('.feature-wrap');

document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.className === "fa-solid fa-grip-lines") {
        features.classList.toggle('active');

        for (let index = 0; index < features.children.length; index++) {
            const curEl = features.children[index]
            if (curEl.className === 'feature-wrap' || curEl.className === 'feature-wrap active') {
                curEl.classList.toggle('active');
                curEl.children[0].classList.toggle('active');
                curEl.children[0].children[0].classList.toggle('active');
                curEl.children[1].classList.toggle('active');
            } else {
                curEl.classList.toggle('active');
            }
        }
    } 

    if (window.innerWidth <= 1026 && el.className === "search-icon") { 
        const searchIcon = document.querySelector('.search-icon-wrapper');
        const searchIconClone = searchIcon.cloneNode(true);
        const searchInput = document.querySelector('.search-input');
        const iWrap = document.createElement('div');
        iWrap.className = 'i-wrap';
        const closeI = document.createElement('i');
        closeI.className = 'fa-solid fa-x close-i';
        iWrap.append(closeI);
        
        sonyCenter.style.display = 'none';

        searchIconClone.classList.add('clicked');
        searchIcon.remove();
        searchContainer.prepend(searchIconClone);
        searchContainer.append(iWrap);
        
        searchContainer.style.display = 'flex';
        contactsWrapper.style.display = 'none';
        searchInput.style.display = 'block';
    }

    if (el.className === "fa-solid fa-x close-i") {
        const closeI = document.querySelector('.close-i');
        const searchIcon = document.querySelector('.search-icon-wrapper');
        const searchInput = document.querySelector('.search-input');
        const searchIconClone = searchIcon.cloneNode(true);

        sonyCenter.style.display = 'block';

        searchInput.style.display = 'none';
        searchInput.value = '';

        searchIconClone.classList.remove('clicked');
        closeI.remove();
        contactsWrapper.prepend(searchIconClone);
        contactsWrapper.style.display = 'flex';
        searchIcon.remove();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth <= 1260) {
        document.querySelector('.contacts-wrapper').appendChild(dropBtn());
    }

    if (window.innerWidth <= 1026) {
        const sector = document.querySelector('.search-icon-wrapper')
        const search = sector.cloneNode(true);

        sector.remove();
        contactsWrapper.prepend(search);
    }

    if (window.innerWidth <= 1630) {
        const previewContainer = document.querySelector('.preview-container');
        const clone = previewContainer.cloneNode(true);

        previewContainer.remove();
        mainImgContainer.append(clone);
    } else {
        const previewContainer = document.querySelector('.preview-container');
        const clone = previewContainer.cloneNode(true);

        previewContainer.remove();
        container.prepend(clone);
    }

    if (window.innerWidth <= 640) { 
        const cloneMainImgContainer = mainImgContainer.cloneNode(true);
        mainImgContainer.remove();

        descriptionContainer.insertBefore(cloneMainImgContainer, descriptionContainer.children[3]);
    } 
});

window.addEventListener('resize', function () {
    if(window.innerWidth <= 1260) {
        document.querySelector('.search-input').style.display = 'block';
    }

    if (window.innerWidth <= 1260 && document.querySelector('.fa-grip-lines') === null) {
        document.querySelector('.contacts-wrapper').appendChild(dropBtn());
    }

    if (window.innerWidth > 1260 && document.querySelector('.fa-grip-lines') !== null) {
        document.querySelector('.fa-grip-lines').remove();
    }

    if (window.innerWidth <= 1026 && searchContainer.children[0].className !== 'search-icon-wrapper clicked') {
        const sector = document.querySelector('.search-icon-wrapper')
        const search = sector.cloneNode(true);
        
        searchContainer.style.display = 'none';
        sector.remove();
        contactsWrapper.prepend(search);
    } else {
        const sector = document.querySelector('.search-icon-wrapper')
        const search = sector.cloneNode(true);

        searchContainer.style.display = 'flex';
        sector.remove();
        searchContainer.prepend(search);
    }
});

