const event_content=document.querySelector('.event_content')
event_text=document.querySelector('.event_text')

event_text.addEventListener('click',()=>{
    event_content.classList.toggle('dropdown');
})





/**MENU**/
navbar=document.querySelector('.navbar')
gif=document.querySelector('.gif')
navigation=document.querySelector('.navigation')
menu=document.querySelector('.menu_icon')


menu.addEventListener('click',()=>{
    navigation.classList.toggle('visible');
    gif.classList.toggle('visible');
    navbar.classList.toggle('nav_res');
})


