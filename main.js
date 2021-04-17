document.querySelector('.menu-btn').addEventListener('click', ()=>{
    document.querySelector('.nav-menu').classList.toggle('show');
})

ScrollReveal().reveal('.showcase', {
    delay: 100,
    origin: 'bottom'
});

ScrollReveal().reveal('.news-cards', {
    distance: '150%',
    delay: 500,
    origin: 'top'
});

ScrollReveal().reveal('.cards-banner-one', {
    distance: '150%',
    delay: 500,
    origin: 'right',
    opacity: null
});

ScrollReveal().reveal('.cards-banner-two', {
    distance: '150%',
    delay: 500,
    origin: 'right'
});