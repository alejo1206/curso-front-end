const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const numRegex = /\d/;
const elNombre = document.querySelector("input[name='nombre']");
const elApellido = document.querySelector("input[name='apellido']");
const elEmail = document.querySelector("input[name='email']");
const elComentario = document.querySelector("textarea[name='comentario']");

function validar(){
    let mensajeError ="";
    if(elNombre.value == "" || elNombre.value == null || elNombre.value == undefined)
        mensajeError += "- El nombre no puede estar vacío.";
    else if(numRegex.test(elNombre.value))
        mensajeError += "\n- El nombre no puede contener números.";
    if(elApellido.value == "" || elApellido.value == null || elApellido.value == undefined)
        mensajeError += "\n- El apellido no puede estar vacío.";
    else if(numRegex.test(elApellido.value))
        mensajeError += "\n- El apellido no puede contener números.";
    if(elEmail.value == "" || elEmail.value == null || elEmail.value == undefined)
        mensajeError += "\n- El email no puede estar vacío.";
    if(elComentario.value == "" || elComentario.value == null || elComentario.value == undefined)
        mensajeError += "\n- El comentario no puede estar vacío.";
    if(!emailRegex.test(elEmail.value))
        mensajeError +="\n- El email ingresado no tiene el formato correcto.";
    if(mensajeError == ""){
        document.getElementById("tituloModal").innerText = "Confirmación";
        document.getElementById("cuerpoModal").innerText = "¿Está seguro de que desea enviar el comentario al administrador?";
        document.getElementById("btnPrimarioModal").innerText = "Si, enviar";
        document.getElementById("btnSecundarioModal").innerText = "No";
    }
    else{
        document.getElementById("tituloModal").innerText = "Error";
        document.getElementById("cuerpoModal").innerText = mensajeError;
        document.getElementById("btnPrimarioModal").innerText = "OK";
        document.getElementById("btnSecundarioModal").style.visibility = "hidden";
    }
    return false;
}