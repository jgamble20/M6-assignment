


function setupSectionClicks() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        section.addEventListener('click', () => {
            alert(`You clicked on the ${section.id} section!`);
        });
    });
}

function drawCanvas() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#0000FF'; 
    ctx.fillRect(50, 50, 200, 100);
}

document.addEventListener('DOMContentLoaded', () => {
    setupSectionClicks();
    drawCanvas();
});