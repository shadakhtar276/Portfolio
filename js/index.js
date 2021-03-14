// rightnav = document.querySelector('.rightnav')
navbar = document.querySelector('.navbar')
navlist  = document.querySelector('.nav-list')
burgur = document.querySelector('.burgur')





burgur.addEventListener('click' , (e)=>{
    e.preventDefault();
    var element = document.getElementById("mydiv");
    element.classList.toggle("v-class-resp");

    // rightnav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');


  
 


})
