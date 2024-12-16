function mostrarMensaje(){
    var nombre = document.getElementById("nombre").value;
    if(nombre){
        document.getElementById("mensaje").innerHTML="Hola, "+nombre;
    }
    else{
        document.getElementById("mensaje").innerHTML="Por fa, ingrese su nombre";
    }
}