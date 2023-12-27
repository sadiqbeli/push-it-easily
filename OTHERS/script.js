javascript
// Add highlight class to clicked section
const sections = document.querySelectorAll('section');

function highlightSection() {
    sections.forEach((section) => {
        section.classList.remove('highlight');
    });
    this.classList.add('highlight');
}

sections.forEach((section) => {
    section.addEventListener('click', highlightSection);
});
