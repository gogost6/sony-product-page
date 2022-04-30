const dropBtn = () => {
    const el = document.createElement('i');
    el.className = "fa-solid fa-grip-lines";
    el.style.fontSize = '30px';
    el.style.color = 'white';
    el.style.cursor = 'pointer';
    return el;
}

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
        const mainImgContainer = document.querySelector('.main-img-wrap')
        const previewContainer = document.querySelector('.preview-container');
        const clone = previewContainer.cloneNode(true);

        previewContainer.remove();
        mainImgContainer.append(clone);
    } else {
        const container = document.querySelector('.container');
        const previewContainer = document.querySelector('.preview-container');
        const clone = previewContainer.cloneNode(true);

        previewContainer.remove();
        container.prepend(clone);
    }
});

window.addEventListener('resize', function () {
    if (window.innerWidth <= 1260 && document.querySelector('.fa-grip-lines') === null) {
        document.querySelector('.contacts-wrapper').appendChild(dropBtn());
    }

    if (window.innerWidth > 1260 && document.querySelector('.fa-grip-lines') !== null) {
        document.querySelector('.fa-grip-lines').remove();
    }

    if (window.innerWidth <= 1026) {
        const sector = document.querySelector('.search-icon-wrapper')
        const search = sector.cloneNode(true);
        const contactsWrapper = document.querySelector('.contacts-wrapper');

        sector.remove();
        contactsWrapper.prepend(search);
    } else {
        const sector = document.querySelector('.search-icon-wrapper')
        const search = sector.cloneNode(true);
        const searchContainer = document.querySelector('.search-container');

        sector.remove();
        searchContainer.prepend(search);
    }

    if (window.innerWidth <= 1630) {
        const mainImgContainer = document.querySelector('.main-img-wrap')
        const previewContainer = document.querySelector('.preview-container');
        const clone = previewContainer.cloneNode(true);

        previewContainer.remove();
        mainImgContainer.append(clone);
    } else {
        const container = document.querySelector('.container');
        const previewContainer = document.querySelector('.preview-container');
        const clone = previewContainer.cloneNode(true);

        previewContainer.remove();
        container.prepend(clone);
    }
});

