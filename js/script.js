const slider = tns({
    container: document.querySelector(".footer-slider"),
    nav: false,
    autoplay: false,
    autoplayButton: false,
    items: 1,
    gutter: 20,
    controls: false,
    responsive: {
        768: {
            items: 1
        }
    }
});

document.querySelector(".next").onclick = (() => {
    slider.goTo("next");
})

document.querySelector(".prev").onclick = (() => {
    slider.goTo("prev");
});

const slideCount = (() => {

    const info = slider.getInfo();
    const slideCount = `slideCount: ${info.slideCount}`;
    const items = `items: ${info.items}`;

    console.log(slideCount, items);

});

window.onresize = function(e) {
    slideCount();
};

slideCount();
