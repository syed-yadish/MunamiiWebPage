const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
const brand = document.querySelector('.nav-bar .brand a h1');

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', ()=>{
    let scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundImage = 'linear-gradient(60deg, #4d105c 0%, #af6ad6 100%)';
        brand.style.color = 'white';
    }
    else{
        header.style.backgroundImage = 'none';
        brand.style.color = 'purple';
    }
});

menu_item.forEach(item =>{
    item.addEventListener('click', ()=> {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});