
/* Inicio de funcion de menu Navegador*/
$(window).scroll(function() {
        if ($("#menu").offset().top > 40) {
            $("#menu").addClass("bg-dark");
        } else {
            $("#menu").removeClass("bg-dark");
        }
});


/*Fin de funcion de menu Navegador*/





/* Inicio de Funcion de filtrado Imagenes*/
$(function() {
    var selectedClass = "";
    $(".filter").click(function(){
    selectedClass = $(this).attr("data-rel");
            
            $("#galeria").fadeTo(100, 0.9);
            $("#galeria div").removeClass('animation').not("."+selectedClass).fadeOut();
            
    setTimeout(function() {
            $("."+selectedClass).fadeIn().addClass('animation');
            $("#galeria").fadeTo(300, 1);
            $(this).addClass('active').siblings().removeClass('active');
    }, 300);
  });
});





/* FIn de Funcion de filtrado Imagenes*/

/*Funcion de transicion enlaces*/
$('li a').click(function(e){
    e.preventDefault();
    var strAncla=$(this).attr('href');
    $('body,html').stop(true,true).animate({
        scrollTop: $(strAncla).offset().top
    },1000);

});

$('div .enlace').click(function(e){
    e.preventDefault();
    var strAncla=$(this).attr('href');
    $('body,html').stop(true,true).animate({
        scrollTop: $(strAncla).offset().top
    },1000);
});

/*Fin de Funcion de transicion enlaces*/


//Inicia la funcion al hacer scroll 


//Variables Constantes
const animado = document.querySelectorAll('.aparece');
const animadoServicios = document.querySelectorAll('.apareceServicios');



//addeventListener 
window.addEventListener('scroll', mostrarScrollAcerca);
// window.addEventListener('scroll',mostrarScrollServicios);


//Funciones
function mostrarScrollAcerca() {
    let scrollTop = document.documentElement.scrollTop;
    for (let i = 0 ; i < animado.length; i++){
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

function eventListener(){
    //Inicio de la aplicacion y desabilita el boton enviar
    document.addEventListener('DOMContentLoaded',inicioApp);

    //Campos del formulario 
    nombre.addEventListener('blur',validarCampo);
    email.addEventListener('blur',validarCampo);
    telefono.addEventListener('blur',validarCampo);
    comentario.addEventListener('blur',validarCampo);

    //Boton de enviar en el submit 
    btnEnviar.addEventListener('click',enviarEmail);

   
    


}
//Funciones

function inicioApp(){
    //deshabilita el boton enviar 
    btnEnviar.disabled = true; 

}



//valida que el campo tenga algo escrito 
function validarCampo() {
    
    //Se valida la logitud del texto y que no este vacio 
    validarLongitud(this);

    
    //Validar unicamente el email 
    if (this.type === 'email'){
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error');
    if(nombre.value !== '' && email.value !== '' && telefono.value !== '' && comentario.value !== ''){
        if(errores.length === 0){
            btnEnviar.disabled = false;
            
        }    
    }
}

function enviarEmail(e){

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
    setTimeout(function() {
            spinnerGif.style.display = 'none';
            document.querySelector('#loaders').appendChild( enviado );
            setTimeout(function(){
                enviado.remove();
                formularioEnviar.reset();
                
            },5000);
    },3000);
    
   
}



//Verifica la longitu del texto en los campos
function validarLongitud(campo){
        
    if(campo.value.length > 0){
        campo.style.borderColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderColor = 'red';
        campo.classList.add('error');
    }
}


function validarEmail(campo){
    const mensaje = campo.value;
    
    if(mensaje.indexOf('@') !== -1){
        campo.style.borderColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderColor = 'red';
        campo.classList.add('error');
    }
}

