var entrada = document.getElementById('entrada-texto');
var salida = document.getElementById('mensaje-salida');

var salidaInvalida = document.getElementById('salida-invalida');
var salidaValida = document.getElementById('salida-valida');

var botonEncriptar = document.getElementById('boton-encriptar');
var botonDesencriptar = document.getElementById('boton-desencriptar');
var botonCopiar = document.getElementById('boton-copiar');

var iconoAdvertencia = document.getElementById('icono-advertencia');
var advertencia = document.getElementById('mensaje-advertencia');

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;

salidaValida.style.display = 'none';

function efectoAdvertencia(color, escala){
    advertencia.style.color = color;
    iconoAdvertencia.style.transform = escala;
    iconoAdvertencia.style.transition = '400ms';
}

function entradaValida(){
 var noPermitido = /[^a-z]/;
 if(noPermitido.test(entrada.value) || entrada.value==''){
    efectoAdvertencia('red','scale(1.4)');
    salidaValida.style.display = 'none';
    salidaInvalida.style.display= '';
 }
 else{
    efectoAdvertencia('black','scale(1.0)');
    salidaValida.style.display = '';
    salidaInvalida.style.display= 'none';
 }
 return !(noPermitido.test(entrada.value) || entrada.value=='');
}

function encriptar(){
    var mensajeEncriptado = '';
    if((entradaValida())){
        for(var i in entrada.value){
            switch(entrada.value[i]){
                case 'a':
                mensajeEncriptado+='ai'; break;
                case 'e':
                mensajeEncriptado+='enter'; break;
                case 'i':
                mensajeEncriptado+='imes'; break;
                case 'o':
                mensajeEncriptado+='ober'; break;
                case 'u':
                mensajeEncriptado+='ufat'; break;
                default:
                mensajeEncriptado+=entrada.value[i];    
            }
        }
    }
    return salida.innerHTML = mensajeEncriptado;
}

function desencriptar(){
    var mensajeDesencriptado = entrada.value;
    if((entradaValida())){
        mensajeDesencriptado = mensajeDesencriptado.replaceAll('enter','e');
        mensajeDesencriptado = mensajeDesencriptado.replaceAll('imes','i');
        mensajeDesencriptado = mensajeDesencriptado.replaceAll('ai','a');
        mensajeDesencriptado = mensajeDesencriptado.replaceAll('ober','o');
        mensajeDesencriptado = mensajeDesencriptado.replaceAll('ufat','u');
    }
    return salida.innerHTML = mensajeDesencriptado;
}

function copiar(){
    navigator.clipboard.writeText(salida.value);
    entrada.value = '';
    salidaValida.style.display = 'none';
    salidaInvalida.style.display= '';
}