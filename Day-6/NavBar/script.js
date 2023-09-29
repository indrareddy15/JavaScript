const links = document.querySelectorAll('.navbar-link');


links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(link => {
            link.className = "navbar-link"
        });
        link.classList.add('change')


        link.previousElementSibling.classList.add('prevElChange');
        link.nextElementSibling.classList.add('nextElChange');
    })
})


const x = 2.75
const y = 60
const z = x * y
console.log(z);