const navBurgerBtn = document.querySelector('.burger-btn'),
        burgerBox = document.querySelector('.burger'),
        headerOffer = document.querySelector('.header-offer');

navBurgerBtn.addEventListener('pointerdown', function(event){
        if(burgerBox.classList.contains('burger--emergence')){
                
                //Код для анимации меню-бургер
                burgerBox.classList.add('burger--disappearance');
                burgerBox.classList.remove('burger--emergence');

                //Код для анимации кнопки в меню-бургер
                navBurgerBtn.classList.add('burger-btn-column');
                navBurgerBtn.classList.remove('burger-btn-cross');

                //функция для отрочки добавления отрицательного z-index для оффера
                function offerZIndex(){
                        headerOffer.style.zIndex = '1';
                }
                setTimeout(offerZIndex, 1000);
        }
        else{      
                headerOffer.style.zIndex = '-1';

                //Код для анимации меню-бургер
                burgerBox.classList.add('burger--emergence');
                burgerBox.classList.remove('burger--disappearance');

                //Код для анимации кнопки в меню-бургер
                navBurgerBtn.classList.add('burger-btn-cross');
                navBurgerBtn.classList.remove('burger-btn-column');
        }
});

const headerTitleH1 = document.querySelector('.header-offer__bg h1'),
        headerTitleH4 = document.querySelector('.header-offer__bg h4'),
        headerTitleBtn = document.querySelector('.header-offer__bg .btn'),
        mainTitleH2Array = document.querySelectorAll('.main-title h2'),
        mainTitleH6Array = document.querySelectorAll('.main-title h6');
        galaryItemArray = document.querySelectorAll('.galary__item');

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function(event){

        const headerTitleTl = gsap.timeline({defaults: {duration: 1, opacity: 0, ease: 'back.out(1.7)'}});

        headerTitleBtn.style.opacity = '1';//Без этой инструкции кнопка при загрузке сначало видна и только через секунду исчезает

        headerTitleTl.from(headerTitleH1, {delay: .8})
                .from(headerTitleH4, {y: 40})
                .from(headerTitleBtn, {delay: .1});
                
        
        for (const iterator of mainTitleH2Array) {
                  gsap.from(iterator, { 
                        scrollTrigger: {
                                trigger: iterator,
                                toggleActions: 'restart restart restart restart',
                        },
                        duration: 1, y: 50, opacity: 0, ease: 'back.out(1.7)',
                });
        };

        for (const iterator of mainTitleH6Array) {
                gsap.from(iterator, {
                        scrollTrigger:{
                                trigger: iterator,
                                toggleActions: 'restart restart restart restart',
                        },
                        duration: 1, y: 50, opacity: 0, ease: 'back.out(1.7)', delay: .5,
                })
        }


        
        for (const iterator of galaryItemArray) {
                gsap.from(iterator, {
                        scrollTrigger: {
                                trigger: iterator,
                                toggleActions: 'restart restart restart restart',
                                start: 'top 80%',
                                end: 'bottom 50%',
                                scrub: true,
                        },
                        duration: .5, opacity: 0, ease: 'flower1 out',
                })
        }
});
