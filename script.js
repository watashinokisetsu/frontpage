const sections = document.querySelectorAll('section');
const colors = ['hsl(0, 60%, 70%)', 'hsl(120, 60%, 70%)', 'hsl(240, 60%, 70%)']; // different colors for each section

window.addEventListener("scroll", function() {
    for (let i = 0; i < sections.length; i++) {
        const rect = sections[i].getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom > 0) {
            document.body.style.backgroundColor = colors[i];
            break;
        }
    }
});
