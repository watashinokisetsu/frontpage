function setSectionBackgrounds() {
  const sections = document.querySelectorAll('.section');
  const scrollPosition = window.pageYOffset;

  sections.forEach(function(section, index) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollPosition >= sectionTop - sectionHeight / 3) {
      section.style.backgroundColor = `rgba(0, 0, 0, ${index / sections.length})`;
    }
  });
}

window.addEventListener('scroll', setSectionBackgrounds);
window.addEventListener('resize', setSectionBackgrounds);
