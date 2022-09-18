'use select';

const btn = document.querySelectorAll('.btn');
const menu = document.querySelector('.menu__list');
const templateSection = document.querySelector('.js-template');
const ourServicesSection = document.querySelector('.js-our-services');
const contactSection = document.querySelector('.js-contact');

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
});

menu.addEventListener('click', function(item){
    console.dir(menu);
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