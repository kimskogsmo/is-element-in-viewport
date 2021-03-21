function isElementInViewport (el) {
    var r = el.getBoundingClientRect();

    return (
        r.top >= 0 &&
        r.left >= 0 &&
        r.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        r.right <= (window.innerWidth || document.documentElement.clientWidth) 
    );
}
