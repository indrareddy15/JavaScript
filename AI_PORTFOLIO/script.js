
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Image modal for portfolio items
const portfolioItems = document.querySelectorAll('.portfolio-item');
const modal = document.getElementById('portfolio-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');

portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        const image = item.querySelector('img');
        const title = item.querySelector('h3').textContent;

        modalImage.src = image.src;
        modalTitle.textContent = title;
        modal.style.display = 'block';
    });
});

modal.addEventListener('click', () => {
    modal.style.display = 'none';
});
