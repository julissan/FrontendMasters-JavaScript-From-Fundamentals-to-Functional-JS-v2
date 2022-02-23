function esPrimo(){
    var numero = 3;
    for(i=1;i<numero;i++){
        if(numero % i == 0 && i != 1){
            console.log(numero + " no es primo, " + i + " es divisor");
            return false;
        }
    }
    console.log(numero + " es primo");
    return true;
}

function primerosPrimos(){
    var numero = 1;
    while(numero < 100){
        numero++;
        var contador = 1;
        var n = 0;
        while (contador <= numero){
            if(numero % contador == 0) n++;
            contador++;
        }
        if(n == 2) console.log(numero);
    }
}

function numerosALetras(){
    var letras = "ABCZ";
    var numeros = [];

    for(letra of letras){
        var numero = letra.charCodeAt(0) - 64; //-96 min, -64 MAY
        numeros.push(numero);
    }
    console.log(numeros);
}

numerosALetras();