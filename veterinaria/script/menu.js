

$(document).ready(function(){
    let menu = document.getElementById('enlaces');
    let abrir = document.getElementById('open');
    let botones = document.getElementsByClassName('btn-header');
    let cerrado = true;
    
    function apertura(params) {
        if (cerrado) {
            menu.style.width = '90%';
            cerrado=false;
        }else{
            menu.style.width='0'
            menu.style.overflow = 'hidden'
            cerrado=true;
        }
    }
    abrir.addEventListener('click', function(){
        apertura(); 
    });
    
})
window.addEventListener('click',function (e) {
    console.log(e.target)
    if (cerrado==false) {
        let span = document.querySelector('span');
        if (e.target !== span !== abrir) {
            menu.style.width='0%';
            menu.style.overflow='hidden';
            cerrado=true;
        }  
    }
   
})