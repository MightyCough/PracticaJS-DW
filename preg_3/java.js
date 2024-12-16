function IsorNo(){
    var mayor = parseFloat(document.getElementById("numero").value);
    var resultado;
    if(!isNaN(mayor)){ 
    if( mayor>=18){
        resultado = "Eres mayor de edad";
    
    }
    else{
        resultado="No eres mayor de edad, abstente de ir a fiestas";
    
    }
}else{
    resultado="por fa, ingresa una edad valida";
}
    document.getElementById("result").innerHTML=resultado;
}