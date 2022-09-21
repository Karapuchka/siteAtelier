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

footerLinks.forEach(function(item){

    item.style.cursor = 'pointer';

    item.addEventListener('mouseover', function(){
        gsap.to(item, {duration: .7, color: '#fff', ease: 'power4.out(1)'});
    });

    item.addEventListener('mouseout', function(){
        gsap.to(item, {duration: .7, color: '#FFAE2B', ease: 'power4.out(1)'});
    });
});

btnSroll.addEventListener('mouseover', function(){
    gsap.to(btnSroll, {cursor: 'pointer'});
});

btnSroll.addEventListener('click', function(){
    header.scrollIntoView({behavior: 'smooth'});
});

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


body.addEventListener('click', function(item){
    if(item.target.closest('.js-modal-active')){
        gsap.to(modal, {duration: 3, ease: 'back.out(1)', y: 0});

        setTimeout(function(){
            gsap.to(modal, {duration: 3, ease: 'back.in(1)', y: 300});
        }, 4000);
    }
});

/* 
    1. Добавить анимацию на элементы сайта
    2. Сделать атаптив
    3. Добавить прелоадер
*/