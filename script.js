function showSection(sectionId) {
    document.querySelectorAll('.content').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// Show the About section by default
document.addEventListener("DOMContentLoaded", function() {
    showSection('about');
});
