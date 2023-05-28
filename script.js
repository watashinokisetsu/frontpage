window.addEventListener('scroll', () => {
    const block1 = document.getElementById('block1').getBoundingClientRect();
    const block2 = document.getElementById('block2').getBoundingClientRect();
    const block3 = document.getElementById('block3').getBoundingClientRect();

    if (block1.top >= 0 && block1.bottom > window.innerHeight / 2) {
        document.body.style.background = getComputedStyle(document.getElementById('block1')).background;
    } else if (block2.top >= 0 && block2.bottom > window.innerHeight / 2) {
        document.body.style.background = getComputedStyle(document.getElementById('block2')).background;
    } else if (block3.top >= 0) {
        document.body.style.background = getComputedStyle(document.getElementById('block3')).background;
    }
});
