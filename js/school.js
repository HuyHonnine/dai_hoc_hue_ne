window.onscroll = () =>{
     if(window.scrollY > 60){
        document.querySelector('.header .navbar').classList.add('active');
     } 
     else{
        document.querySelector('.header .navbar').classList.remove('active');
     }
  }