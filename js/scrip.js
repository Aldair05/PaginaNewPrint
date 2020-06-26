
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

//Validando El formulario de contacto 
//Variables 
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const comentario = document.getElementById('comentario');
const btnEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('formularioEnviar');
const btnReset = document.getElementById('reset');

//EventListener 
eventListener();

function eventListener() {
    //Inicio de la aplicacion y desabilita el boton enviar
    document.addEventListener('DOMContentLoaded', inicioApp);

    //Campos del formulario 
    nombre.addEventListener('blur', validarCampo);
    email.addEventListener('blur', validarCampo);
    telefono.addEventListener('blur', validarCampo);
    comentario.addEventListener('blur', validarCampo);

    //Boton de enviar en el submit 
    btnEnviar.addEventListener('click', enviarEmail);
}
//Funciones

function inicioApp() {
    //deshabilita el boton enviar 
    btnEnviar.disabled = true;

}

//valida que el campo tenga algo escrito 
function validarCampo() {

    //Se valida la logitud del texto y que no este vacio 
    validarLongitud(this);


    //Validar unicamente el email 
    if (this.type === 'email') {
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error');
    if (nombre.value !== '' && email.value !== '' && telefono.value !== '' && comentario.value !== '') {
        if (errores.length === 0) {
            btnEnviar.disabled = false;

        }
    }
}

function enviarEmail(e) {
    //spinner al presionar Enviar
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';

    //crear el gig Email
    const enviado = document.createElement('img');
    enviado.src = 'imagenes/mail.gif';
    enviado.style.width = '150px';
    enviado.style.margin = '0 auto';
    enviado.style.display = 'block';


    //Ocultar Spinner y mostrar gif de enviado 
    setTimeout(function () {
        spinnerGif.style.display = 'none';
        document.querySelector('#loaders').appendChild(enviado);
        setTimeout(function () {
            enviado.remove();
            formularioEnviar.reset();

        }, 5000);
    }, 3000);


}



//Verifica la longitu del texto en los campos
function validarLongitud(campo) {
    if (campo.value.length > 0) {
        campo.style.borderColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderColor = 'red';
        campo.classList.add('error');
    }
}

function validarEmail(campo) {
    const mensaje = campo.value;

    if (mensaje.indexOf('@') !== -1) {
        campo.style.borderColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderColor = 'red';
        campo.classList.add('error');
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

