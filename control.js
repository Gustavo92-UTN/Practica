function validarDatos(form){
    let inputUsuario = form.email;
    let inputPassword = form.contraseña;

    if (inputUsuario.value == ""){
        alert("El campo Usuario no puede estar vacio");
        inputUsuario.focus();
        return false;
/*Aca el indexOf busca el @ en la cadena de caracteres, si lo encuentra devuelve la posicion en donde se encuentra,
en caso de que no lo encuentre devuelve un -1*/
    }else if (inputUsuario.value.indexOf('@', 0) == -1){
        alert("Falta el @ en el campo usuario");
        inputUsuario.focus();
        return false;
    }else if (inputPassword.value == ""){
        alert("El campo Clave no puede estar vacio");
        inputPassword.focus();
        return false;
    }else{
        alert("DATOS ENVIADOS");
        return true;
    }
}