window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const block1Height = document.getElementById('block1').offsetHeight;
    const block2Height = document.getElementById('block2').offsetHeight;
    const block3Height = document.getElementById('block3').offsetHeight;

    if (currentScroll < block1Height) {
        document.body.style.background = getComputedStyle(document.getElementById('block1')).background;
    } else if (currentScroll < block1Height + block2Height) {
        document.body.style.background = getComputedStyle(document.getElementById('block2')).background;
    } else {
        document.body.style.background = getComputedStyle(document.getElementById('block3')).background;
   
