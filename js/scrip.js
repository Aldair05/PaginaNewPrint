
//Menu Responsive 
$(function(){


    $('.menu-movil').on('click',function(){
        console.log('diste click');
        $('.navegacion-principal').slideToggle();
    });

    //Menu Fijo
    var windowHeight = $(window).height();
    var barraAltura = $('.barra').innerHeight();

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();

        if(scroll > windowHeight){
            $('.barra').addClass('fixed');
            $('body').css({'margin-top': barraAltura+'px'});
        }else{
            $('.barra').removeClass('fixed');
            $('body').css({'margin-top':'0px'});
        }
    });


    /*Funcion de transicion enlaces*/
    $('nav a').click(function (e) {
        e.preventDefault();
        var strAncla = $(this).attr('href');
        $('body,html').stop(true, true).animate({
            scrollTop: $(strAncla).offset().top
        }, 1000);
    
    });


});




/* Inicio de Funcion de filtrado Imagenes*/
(function () {
    $(document).ready(function () {
        $(".btn-menu").click(function () {
            var filtro = $(this).attr("data-filter");

            if (filtro == "todos") {
                $(".imagen").show(500);
            } else {
                $(".imagen").not("." + filtro).hide(500);
                $(".imagen").filter("." + filtro).show(500);
            }
        });
    });
}())



/* FIn de Funcion de filtrado Imagenes*/




// $('div .enlace').click(function (e) {
//     e.preventDefault();
//     var strAncla = $(this).attr('href');
//     $('body,html').stop(true, true).animate({
//         scrollTop: $(strAncla).offset().top
//     }, 1000);
// });

/*Fin de Funcion de transicion enlaces*/





//Variables Constantes
const animado = document.querySelectorAll('.aparece');
const animadoServicios = document.querySelectorAll('.apareceServicios');



//addeventListener 
window.addEventListener('scroll', mostrarScrollAcerca);
// window.addEventListener('scroll',mostrarScrollServicios);


//Funciones
function mostrarScrollAcerca() {
    let scrollTop = document.documentElement.scrollTop;
    for (let i = 0; i < animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop;
        if (alturaAnimado - 900 < scrollTop) {
            // animado[i].style.opacity = 1;
            animado[i].classList.add('fadeInDown');
        }
    }
}




//Mapa

$(function (){

    var map = L.map('mapa').setView([19.285818, -98.93653], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.marker([19.285818, -98.93653]).addTo(map)
        .bindPopup('New Print')
        .openPopup();



})

// $(window).scroll(function (){


        
// });

