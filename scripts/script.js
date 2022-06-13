const navBurgerBtn = document.querySelector('.burger-btn'),
        burgerBox = document.querySelector('.burger'),
        headerOffer = document.querySelector('.header-offer');

navBurgerBtn.addEventListener('pointerdown', ()=>{
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

