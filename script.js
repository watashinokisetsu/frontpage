const sections = document.querySelectorAll('section');
const classes = ['color1', 'color2', 'color3']; // corresponding classes for each section

window.addEventListener("scroll", function() {
    for (let i = 0; i < sections.length; i++) {
        const rect = sections[i].getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom > 0) {
            document.body.className = classes[i]; // change the class of body
            break;
        }
    }
});
