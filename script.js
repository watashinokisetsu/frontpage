window.addEventListener("scroll", function() {
    const currentScroll = window.pageYOffset;
    const maxScroll = document.body.scrollHeight - window.innerHeight;

    const scrollFraction = currentScroll / maxScroll;
    const hueRotation = scrollFraction * 360;

    document.body.style.backgroundColor = `hsl(${hueRotation}, 60%, 70%)`;
});
