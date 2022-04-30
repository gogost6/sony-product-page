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

document.addEventListener('click', function (e) {
    const el = e.target;
    const features = document.querySelector('.features-container');
    const featureWrap = document.querySelectorAll('.feature-wrap');

    if (el.className === "fa-solid fa-grip-lines") {
        features.classList.toggle('active');
        for (let index = 0; index < featureWrap.length; index++) {
            featureWrap[index].classList.toggle('active');
        }
    } 

    const contactsWrapper = document.querySelector('.contacts-wrapper');

    if (window.innerWidth <= 1026 && el.className === "search-icon") { 
        sonyCenter.style.display = 'none';
        const closeI = document.createElement('i');
        closeI.className = 'fa-solid fa-x close-i';

        const searchIcon = document.querySelector('.search-icon-wrapper');
        const searchIconClone = searchIcon.cloneNode(true);
        searchIconClone.classList.add('clicked');
        searchIcon.remove();
        const searchInput = document.querySelector('.search-input');
        searchContainer.prepend(searchIconClone);
        searchContainer.append(closeI);
        
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
        const contactsWrapper = document.querySelector('.contacts-wrapper');

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
        const contactsWrapper = document.querySelector('.contacts-wrapper');
        
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

