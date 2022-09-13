'use select';

const btn = document.querySelectorAll('.btn');

btn.forEach(function(item){
    if(!item.classList.contains('navigation__btn')){
        item.addEventListener('mouseover', function(){
            gsap.to(item, {duration: .7, backgroundColor: '#facd84', ease: 'power4.out(1)'});
        });
        item.addEventListener('mouseout', function(){
            gsap.to(item, {duration: .7, backgroundColor: '#FFAE2B', ease: 'power4.out(1)'});
        });
    }
    else{
        item.addEventListener('mouseover', function(){
            gsap.to(item, {duration: .7, backgroundColor: '#363433', ease: 'power4.out(1)'});
        });
        item.addEventListener('mouseout', function(){
            gsap.to(item, {duration: .7, backgroundColor: 'transparent', ease: 'power4.out(1)'});
        });
    };
});