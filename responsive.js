console.log(window.innerWidth);

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
    const features = document.querySelector('.features-container').style.display;

    if (el.className === "fa-solid fa-grip-lines" && (features === 'none' || features === '')) {
        document.querySelector('.features-container').style.display = 'flex';
    } else if (el.className === "fa-solid fa-grip-lines" && features === 'flex') {
        document.querySelector('.features-container').style.display = 'none';
    }
})

document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth <= 1260) {
        document.querySelector('.contacts-wrapper').appendChild(dropBtn());
    }
});

window.addEventListener('resize', function () {
    if (window.innerWidth <= 1260 && document.querySelector('.fa-grip-lines') === null) {
        document.querySelector('.contacts-wrapper').appendChild(dropBtn());
    }

    if (window.innerWidth > 1260 && document.querySelector('.fa-grip-lines') !== null) {
        document.querySelector('.fa-grip-lines').remove();
    }
});

