var menubar = document.querySelector('#menu-bar')
var mynav = document.querySelector('.navbar')


menubar.onclick = () =>{
    menubar.classList.toggle('fa-times')
    mynav.classList.toggle('active')
}

const navbar = document.querySelector('.header')

window.onscroll = () =>{
    if(window.scrollY > 300){
        navbar.classList.add('active')
    }
    else{
        navbar.classList.remove('active')
    }
}




$(document).ready(function(){
    $('.counter-value').each(function(){
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        },{
            duration: 3500,
            easing: 'swing',
            step: function (now){
                $(this).text(Math.ceil(now));
            }
        });
    });
});




// $(function(){
//     $('Hod').load('header.html');
// });