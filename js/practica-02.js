window.onload = inicio;

function inicio(){
    document.formulario.onsubmit = validar;
}

function validar(){
    let enviar = true;
    //vacio las cajas de texto de error
	document.formulario.errNombre.value="";
	document.formulario.errApellido.value="";
	document.formulario.errNif.value="";
    document.formulario.errFnac.value="";
	document.formulario.errTipovia.value="";
    document.formulario.errDenomvia.value="";
    document.formulario.errNumero.value="";
    document.formulario.errCorreo.value="";
    document.formulario.errWeb.value="";
    document.formulario.errEstadociv.value="";
    document.formulario.errSectores.value="";
    document.formulario.errPaises.value="";
    //extraigo el valor de las cajas de texto
    let nombre = document.formulario.nombre.value.trim();
    let apellido = document.formulario.apellido.value.trim();
    let denomvia = document.formulario.denomvia.value.trim();
    let nif = document.formulario.nif.value.trim();
    let tipovia = document.formulario.tipovia.value.trim();
    let numero = document.formulario.numero.value.trim();
    let correo = document.formulario.correo.value.trim();
    let web = document.formulario.web.value.trim();
    let fnac = document.formulario.fnac.value.trim();
    let estadocivil = document.formulario.estadocivil.value;
    let sector = document.formulario.sector;
    let paises = document.formulario.paises;

    if (!validarNombre(nombre)) {
        enviar = false;
        document.formulario.errNombre.value="Error, nombre incorrecto";
    } 
    else{
    document.formulario.errNombre.value="";
    }
    if (!validarApellido(apellido)) {
        enviar = false;
        document.formulario.errApellido.value="Error, apellido incorrecto";
    } 
    else{
    document.formulario.errApellido.value="";
    }
    if (!validarDenomVia(denomvia)) {
        enviar = false;
        document.formulario.errDenomvia.value="Error, denominación de la vía incorrecta";
    } 
    else{
    document.formulario.errDenomvia.value="";
    }
    if (!validarNif(nif)) {
        enviar = false;
        document.formulario.errNif.value="Error, NIF incorrecto";
    } 
    else{
    document.formulario.errNif.value="";
    }
    if (!validarTipovia(tipovia)) {
        enviar = false;
        document.formulario.errTipovia.value="Error, Tipo de vía incorrecta";
    } 
    else{
    document.formulario.errTipovia.value="";
    }
    if (!validarNumero(numero)) {
        enviar = false;
        document.formulario.errNumero.value="Error, número incorrecto";
    } 
    else{
    document.formulario.errNumero.value="";
    }
    if (!validarCorreo(correo)) {
        enviar = false;
        document.formulario.errCorreo.value="Error, correo electrónico incorrecto";
    } 
    else{
    document.formulario.errCorreo.value="";
    }
    if (!validarWeb(web)) {
        enviar = false;
        document.formulario.errWeb.value="Error, dirección web incorrecta";
    } 
    else{
    document.formulario.errWeb.value="";
    }
    if (!validarFnac(fnac)) {
        enviar = false;
        document.formulario.errFnac.value="Error, fecha introducida incorrecta";
    } 
    else{
    document.formulario.errFnac.value="";
    }
    if (estadocivil.length == 0) {
        enviar = false;
        document.formulario.errEstadociv.value="Error, marque un estado civil";
    } 
    else{
    document.formulario.errEstadociv.value="";
    }
    if (!validarSectores(sector)) {
        enviar = false;
        document.formulario.errSectores.value="Error, marque al menos 3 sectores";
    } 
    else{
    document.formulario.errSectores.value="";
    }
    if (!validarPaisesTrab(paises)) {
        enviar = false;
        document.formulario.errPaises.value="Error, marque al menos 2 países";
    } 
    else{
    document.formulario.errPaises.value="";
    }


    return enviar;

}

function validarSectores(dato) {
    let correcto = true;
    let i = 0;
    let cont = 0;
    while (i < dato.length) {
        if (dato[i].checked) //si está marcado 
            cont++; //incremento
        i++;        
    }
    if (cont < 3) { //si hay menos de 3 seleccionados
        correcto = false;
    }
    return correcto;
}

function validarPaisesTrab(dato) {
    let correcto = true;
    let i = 0;
    let cont = 0;
    while (i < dato.length) {
        if (dato[i].selected) //si está seleccionado
            cont++; //incremento
        i++;        
    }
    if (cont < 2) { //si hay menos de 2 seleccionados
        correcto = false;
    }
    return correcto;
}


function validarNombre(dato){
    dato = dato.toLowerCase();
    let correcto = true;
    //empieza por 2 letras, termina 1 letra
    //en medio puede tener letras y espacios
    //longitud de 3-17 caracteres
    let expresion = /^[a-záéíóúñ]{2}[a-záéíóúñ ]{0,14}[a-záéíóúñ]$/i;
    if (!expresion.test(dato)) {
        correcto = false;
    }
    return correcto;
}

function validarApellido(dato){
    dato = dato.toLowerCase();
    let correcto = true;
    //empieza por 5 letras, termina 3 letra
    //en medio puede tener letras, guion y espacio
    //longitud de 9-36 caracteres
    let expresion = /^[a-záéíóúñ]{5}[a-záéíóúñ\- ]{1,28}[a-záéíóúñ]{3}$/i;
    if (!expresion.test(dato)) {
        correcto = false;
    }
    return correcto;
}

function validarDenomVia(dato){
    dato = dato.toLowerCase();
    let correcto = true;
    //empieza y termina por 1 letra
    //en medio puede tener letras, guion y espacio
    //longitud min de 12 caracteres
    let expresion = /^[a-záéíóúñ][a-záéíóúñºª\- ]{10,}[a-záéíóúñ]$/i;
    if (!expresion.test(dato)) {
        correcto = false;
    }
    return correcto;
}

function validarNif(dato){
    dato = dato.toLowerCase();
    let correcto = true;
    //empieza por digito o letra xyzklm
    //termina por una letra trwagmyfpdxbnjzsqvhlcke
    //en medio tiene 7 digitos
    //longitud total de 9
    let expresion = /^[0-9xyzklm][0-9]{7}[trwagmyfpdxbnjzsqvhlcke]$/i;
    if (!expresion.test(dato)) {
        correcto = false;
    }
    return correcto;
}

function validarTipovia(dato){
    dato = dato.toLowerCase();
    let correcto = true;
    //solo admite los valores Calle, Avenida, Paseo, Plaza, Camino, Ronda, Carretera, Plazuela
    let expresion = /^\b(calle|avenida|paseo|plaza|camino|ronda|carretera|plazuela)\b$/i;
    if (!expresion.test(dato)) {
        correcto = false;
    }
    return correcto;
}

function validarNumero(dato){
    let correcto = true;
    //un número de una a tres cifras
    let expresion = /^(0?0?[0-9]|0?[1-9]\d|[1-9]\d{2})$/i;
    if (!expresion.test(dato)) {
        correcto = false;
    }
    return correcto;
}

function validarCorreo(dato){
    dato = dato.toLowerCase();
    let correcto = true;
    //empieza por 1 letra
    //le siguen letras, dígitos, guión o punto
    //le sigue 1 dígito o letra antes del arroba
    //acontinuacion @
    //le sigue 1 letra
    //acontinuacion n dígitos, letras o guión
    //le sigue 1 dígito o letra
    //acontinuacion punto
    //termina 2-4 letras
    let expresion = /^[a-z][0-9a-z\-\.]{0,}[0-9a-z]@[a-z][0-9a-z\-]{0,}[0-9a-z]\.[a-z]{2,4}$/i;
    if (!expresion.test(dato)) {
        correcto = false;
    }
    return correcto;
}

function validarWeb(dato){
    dato = dato.toLowerCase();
    let correcto = true;
    //puede tener o no http:// o https://
    //puede tener o no www.
    //le sigue una letra
    //acontinuacion puede tener letras, dígitos, guión
    //le sigue 1 dígito o letra antes del punto
    //punto
    //termina 2-4 letras
    let expresion = /^(((http:\/\/|https:\/\/)(www\.))|(www\.))?[a-z][0-9a-z\-]{0,}[0-9a-z]\.[a-z]{2,4}$/i;
    if (!expresion.test(dato)) {
        correcto = false;
    }
    return correcto;
}

function validarFnac(dato){
    dato = dato.toLowerCase();
    let correcto = true;
    //dos dígitos para el día y el mes y cuatro para el año 
    let expresion = /^((((((0?[1-9])|([12]\d)|(3[01]))[\-\/]((0?[13578])|(1[02])))|(((0?[1-9])|([12]\d)|(30))[\-\/]((0?[469])|(11))))[\-\/]\d{4}))|((((0?[1-9])|[12]\d))[\-\/]0?2[\-\/](([02468][048]00)|([13579][26]00)|(\d\d[2468][048])|(\d\d[13579][26])|(\d\d0[48]))|(((0?[1-9])|(1\d)|(2[-8]))[\-\/]0?2(([02468][1235679]00)|([13579][01345789]00)|(\d\d[02468][1235679])|(\d\d[13579][01345789]))))$/;
    if (!expresion.test(dato)) {
        correcto = false;
    }
    return correcto;
}



