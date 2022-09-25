'use select';

gsap.registerPlugin(ScrollTrigger);

const body = document.body;
const header = document.querySelector('header');
const btn = document.querySelectorAll('.btn');
const menu = document.querySelector('.menu__list');
const templateSection = document.querySelector('.js-template');
const ourServicesSection = document.querySelector('.js-our-services');
const contactSection = document.querySelector('.contact');
const footerLinks = document.querySelectorAll('.js-footer__links');
const btnSroll = document.querySelector('.btn-scroll');
const modal = document.querySelector('.modal');
const socialLinksBlock = document.querySelector('.social-link');
const btnViewLayouts = document.querySelector('.js-view-layouts')
const btnBuyTemplate = document.querySelector('.js-btn-buy-template');

window.addEventListener('DOMContentLoaded', function(item){
    gsap.from(['.logo', '.menu .menu__item', '.navigation__btn'], {duration: .8, y: -10, stagger: .8, opacity: 0});
    gsap.from('.js-header-subtitle', {duration: 2, opacity: 0, y: -50});
    gsap.from('.js-header-title', {duration: 2, opacity: 0, y: 50, delay: 1});
    gsap.from(btnViewLayouts, {duration: 2, opacity: 0, y: -50, delay: 2});
});

//Анимация заголовка сексии
function animataionTitile(title, subtitile, trigger){
    gsap.from(title, {
        duration: 2, 
        y: 40, 
        opacity: 0,
        delay: .7,
        scrollTrigger:{
            trigger: trigger,
            start: 'top center',
        }
    });

    gsap.from(subtitile, {
        duration: 2,
        y: -40, 
        opacity: 0, 
        scrollTrigger:{
            trigger: trigger,
            start: 'top center',
        }
    });
};

// Анимация ссылок в footer
footerLinks.forEach(function(item){

    item.style.cursor = 'pointer';

    item.addEventListener('mouseover', function(){
        gsap.to(item, {duration: .7, color: '#fff', ease: 'power4.out(1)'});
    });

    item.addEventListener('mouseout', function(){
        gsap.to(item, {duration: .7, color: '#FFAE2B', ease: 'power4.out(1)'});
    });
});

// Анимация кнопок на всей страницы 
btn.forEach(function(item){

    if(!item.classList.contains('navigation__btn')){

        gsap.to(item, {backgroundColor: '#FFAE2B'});

        item.addEventListener('mouseover', function(){
            gsap.to(item, {duration: .7, backgroundColor: '#facd84', ease: 'power4.out(1)'});
        });

        item.addEventListener('mouseout', function(){
            gsap.to(item, {duration: .7, backgroundColor: '#FFAE2B', ease: 'power4.out(1)'});
        });
    }

    else{

        gsap.to(item, {backgroundColor: 'transparent'});

        item.addEventListener('mouseover', function(){
            gsap.to(item, {duration: .7, backgroundColor: '#363433', ease: 'power4.out(1)'});
        });

        item.addEventListener('mouseout', function(){
            gsap.to(item, {duration: .7, backgroundColor: 'transparent', ease: 'power4.out(1)'});
        });
    };

    if(item.classList.contains('js-view-layouts')){
        item.addEventListener('click', function(){
            templateSection.scrollIntoView({behavior: 'smooth'});
        })
    }
});

// Изменение размера кнопки "Buy Template"
if(body.offsetWidth <= 780){

    btnBuyTemplate.innerText = '';

    gsap.to(btnBuyTemplate, {
        width: '50px', 
        height: '50px',
        background: 'url(\"../images/shoppingCart.png\") no-repeat center/ 45%',
    });
}

if(body.offsetWidth <= 580){

    btnBuyTemplate.style.display = 'none';

    let li = document.createElement('li');
    li.classList.add('menu__item');
    li.innerText = 'Buy Template',

    menu.appendChild(li);
}


//Анимация кнопок меню (добавление скролла к пуктам на сайте)
menu.addEventListener('click', function(item){

    if(item.target.closest('.menu__item')){

        item.target.closest('.menu__item').classList.add('active');

        if(menu.children[0].classList.contains('active')){
            menu.children[0].classList.remove('active');
            templateSection.scrollIntoView({behavior: 'smooth'});
        }
        if(menu.children[1].classList.contains('active')){
            menu.children[1].classList.remove('active');
            ourServicesSection.scrollIntoView({block: 'center', inline: 'center', behavior: 'smooth'});
        }
        if(menu.children[2].classList.contains('active')){
            menu.children[2].classList.remove('active');
            contactSection.scrollIntoView({block: 'center', inline: 'center', behavior: 'smooth'});
        }
    }
});

menu.addEventListener('mouseover', function(item){

    if(item.target.closest('.menu__item')){
        gsap.to(item.target.closest('.menu__item'), {duration: .7, color: '#facd84', ease: 'power4.out(1)'});
    }
});

menu.addEventListener('mouseout', function(item){

    if(item.target.closest('.menu__item')){
        gsap.to(item.target.closest('.menu__item'), {duration: .7, color: '#ACA592', ease: 'power4.out(1)'});
    }
});

//Анимация для кнопок/ссылок на другие источники (вызывает модальное окно)
body.addEventListener('click', function(item){
    if(item.target.closest('.js-modal-active')){
        gsap.to(modal, {duration: 3, ease: 'back.out(1)', y: 0});

        setTimeout(function(){
            gsap.to(modal, {duration: 3, ease: 'back.in(1)', y: 300});
        }, 4000);
    }
});

//Анимация для кнопок в разделе "Socail link"
socialLinksBlock.addEventListener('mouseover', function(item){
    if(item.target.closest('.social-link__item')){+
        gsap.to(item.target.closest('.social-link__item'), {duration: .7, ease: 'power4.out(1)', backgroundColor: '#facd84'})
    }
});

socialLinksBlock.addEventListener('mouseout', function(item){
    if(item.target.closest('.social-link__item')){+
        gsap.to(item.target.closest('.social-link__item'), {duration: .7, ease: 'power4.out(1)', backgroundColor: 'transparent'})
    }
});

animataionTitile('.js-template-title', '.js-template-subtitle', '.js-template-title');
animataionTitile('.js-our-services-title', '.js-our-services-sibtitle', '.js-our-services-title');
animataionTitile('.js-social-media-title', '.js-social-media-subtitle', '.js-social-media-title');
animataionTitile('.services__text', '.js-services-title', '.services');

gsap.from('.gallery__item', {
    duration: 2,
    stagger: .4,
    opacity: 0,
    y: -40,
    scrollTrigger: {
        trigger: '.gallery',
        start: 'top center'
    }
});

gsap.from('.services__item', {
    duration: 2,
    stagger: .4,
    opacity: 0,
    y: 40,
    scrollTrigger: {
        trigger: '.services',
        start: 'top center'
    }
});

gsap.from(['.stripes__black', '.stripes__orange'], {
    duration: 2,
    y: -40,
    stagger: .7,
    opacity: 0,
    scrollTrigger: {
        trigger: '.js-social-media-title',
        start: 'top center',
    }
});

gsap.from('.stripes__text', {
    duration: 2,
    y: 40,
    opacity: 0,
    scrollTrigger: {
        trigger: '.js-social-media-title',
        start: 'top center',
    }
});

gsap.from('.social-link__item', {
    duration: 2,
    y: 40,
    opacity: 0,
    scrollTrigger: {
        trigger: '.js-social-media-title',
        start: 'top center',
    },
    stagger: {
        each: .5,
        from: 'random'
    }
});

gsap.from('.stripes__text', {
    duration: 2,
    y: 40,
    opacity: 0,
    scrollTrigger: {
        trigger: '.js-social-media-title',
        start: 'top center',
    }
});

gsap.from('.footer__content', {
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: '.js-social-media-title',
        start: 'top center',
    }
});

if(body.offseWidth <= 780){

    gsap.from('.social-media', {
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: '.social-media',
            start: 'top center',
        }
    })
    
    gsap.from('.social-media__item', {
        duration: 2,
        stagger: {
            each: .4,
            from: 'center'
        },
        opacity: 0,
        y:- 40,
        scrollTrigger: {
            trigger: '.social-media',
            start: 'top center',
        }
    }); 
}
else{

    gsap.to(btnSroll, {
        scrollTrigger: {
            trigger: btnSroll,
            toggleActions: 'restart none reset none',
            start: 'top top',
            end: '200% bottom',
        },
        duration: .7,
        ease: 'power4.out(1)',
        display: 'flex',
        opacity: 1,
    });

    btnSroll.addEventListener('click', function(){
        header.scrollIntoView({behavior: 'smooth'});
    });

    gsap.from('.social-media', {
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: '.social-media',
            start: 'top center',
        }
    })
    
    gsap.from('.social-media__item', {
        duration: 2,
        stagger: {
            each: .4,
            from: 'center'
        },
        opacity: 0,
        y:- 40,
        scrollTrigger: {
            trigger: '.social-media',
            start: 'top center',
        }
    });
};

/* 
    2. Сделать атаптив
    3. Добавить прелоадер
*/