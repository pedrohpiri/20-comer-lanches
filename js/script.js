// Animação de aparição ao rolar a página
document.addEventListener("DOMContentLoaded", function() {
    const faders = document.querySelectorAll(".fade-in");
    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("show");
            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});

// Funções de navegação do carrossel
let slideIndex = 0;
mostrarSlide(slideIndex);

function mudarSlide(n) {
    mostrarSlide(slideIndex += n);
}

function mostrarSlide(n) {
    const slides = document.getElementsByClassName("item-cardapio");
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

// Animação de deslizar ao rolar a página
document.addEventListener("DOMContentLoaded", function() {
    const sliders = document.querySelectorAll(".slide-in");
    const slideOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    const slideOnScroll = new IntersectionObserver(function(entries, slideOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("show");
            slideOnScroll.unobserve(entry.target);
        });
    }, slideOptions);

    sliders.forEach(slider => {
        slideOnScroll.observe(slider);
    });
});

// Efeito Parallax para imagens de fundo
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    if (parallax) {
        let offset = window.pageYOffset;
        parallax.style.backgroundPositionY = offset * 0.5 + "px";
    }
});
