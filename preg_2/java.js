function calcular(){
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var operacion = document.getElementById("operacion").value;
    if(!isNaN(num1) && !isNaN(num2)){
        var resultado;
        switch(operacion){
            case 'suma':
                resultado = num1+num2;
                break;
            case 'resta':
                resultado=num1-num2;
                break;
            case 'multiplicacion':
                resultado=num1*num2;
                break;
            case 'division':
                if(num2 !== 0){
                    resultado=num1/num2;
                    break;
                }
                else{
                    resultado = "No se puede dividir por cero";
                    break;
                }
            break;
            default:
            resultado='Operacion no valida';
        }
        document.getElementById("resultado").innerHTML="Resultado:" + resultado;
    }
    else{
        document.getElementById("resultado").innerHTML="Por fa, ingrese ambos numeros";
    }

}