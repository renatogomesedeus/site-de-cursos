//navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
        ('window-scroll', window.scrollY > 0)
})

// Efeito abrir o paragrafo do duvidas frequantes 

const faqs = document.querySelectorAll('.faq')

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open')

        // Efeito do icone mais para o menos 
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus";
        } else {
            icon.className = "uil uil-plus";
        }
    })
})

// Efeito abrir menu hamburguer para mobile

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = menu document.querySelector(".close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    close.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// Abrir menu hamburguer
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventLitener ('click', () => {

})

