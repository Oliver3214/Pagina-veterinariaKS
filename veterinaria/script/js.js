/*let indice = 1;
muestraSlides(indice);

function avanzaSlide(n){
    muestraSlides( indice+=n );
}

function posicionSlide(n){
    muestraSlides(indice=n);
}
setInterval(function tiempo(){
    muestraSlides(indice+=1)
},4000);



function muestraSlides(n){
    let i;
    let slides = document.getElementsByClassName('miSlider');
    let barras = document.getElementsByClassName('barra');

    if(n > slides.length){
        indice = 1;
    }
    if(n < 1){
        indice = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for(i = 0; i < barras.length; i++){
        barras[i].className = barras[i].className.replace(" active", "");
    }

    slides[indice-1].style.display = 'block';
    barras[indice-1].className += ' active';

}*/


/*boton subir */ 
$(document).ready(function(){

    $('.ir-arriba').click(function(){

        $('body, html').animate({
        
        scrollTop: '0px'
        
        }, 500);
        
        });
        $(window).scroll(function () {
            if ($(this).scrollTop() > 0){
                $('.ir-arriba').slideDown(500);
            }else{
                $('.ir-arriba').slideUp(500);
            }
        })
});
/*animaciones con scroll*/ 
window.addEventListener('scroll', function() {
   let animacion = document.getElementById('animado'); 
   let posicionObj1 = animacion.getBoundingClientRect().top;

   let tamañoDePantalla = window.innerHeight;

   if (posicionObj1 < tamañoDePantalla) {
       animacion.style.animation='arriba .7s ease-out'
   }
});
//galeria
window.addEventListener('scroll', function (params) {
    let animacion=document.getElementById('animadoGaleria');
    let posicionObj1=animacion.getBoundingClientRect().top;

    let tamañoDePantalla=window.innerHeight;

    if (posicionObj1 < tamañoDePantalla) {
        animacion.style.animation='arriba .7s ease-out'
    }
});
window.addEventListener('scroll', function (params) {
    let animacion1=document.getElementById('animadoGaleria2');
    let posicionObj1=animacion1.getBoundingClientRect().top;

    let tamañoDePantalla=window.innerHeight;

    if (posicionObj1 < tamañoDePantalla) {
        animacion1.style.animation='arriba .7s ease-out'
    }
});
window.addEventListener('scroll', function (params) {
    let animacion=document.getElementById('animadoGaleria3');
    let posicionObj1=animacion.getBoundingClientRect().top;

    let tamañoDePantalla=window.innerHeight;

    if (posicionObj1 < tamañoDePantalla) {
        animacion.style.animation='arriba .7s ease-out'
    }
});
//informacion
window.addEventListener('scroll', function (params) {
    let animacion=document.getElementById('informacion');
    let posicionObj1=animacion.getBoundingClientRect().top;

    let tamañoDePantalla=window.innerHeight;

    if (posicionObj1 < tamañoDePantalla) {
        animacion.style.animation='arriba .7s ease-out'
    }
});
window.addEventListener('scroll', function (params) {
    let animacion=document.getElementById('informacion1');
    let posicionObj1=animacion.getBoundingClientRect().top;

    let tamañoDePantalla=window.innerHeight;

    if (posicionObj1 < tamañoDePantalla) {
        animacion.style.animation='arriba .7s ease-out'
    }
});
window.addEventListener('scroll', function (params) {
    let animacion=document.getElementById('informacion2');
    let posicionObj1=animacion.getBoundingClientRect().top;

    let tamañoDePantalla=window.innerHeight;

    if (posicionObj1 < tamañoDePantalla) {
        animacion.style.animation='arriba .7s ease-out'
    }
});
//contactanos
window.addEventListener('scroll', function (params) {
    let animacion=document.getElementById('contacto');
    let posicionObj1=animacion.getBoundingClientRect().top;

    let tamañoDePantalla=window.innerHeight;

    if (posicionObj1 < tamañoDePantalla) {
        animacion.style.animation='arriba .7s ease-out'
    }
});
