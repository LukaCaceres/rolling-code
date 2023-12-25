/*Confeccionar una función a la cual le envíe tres enteros y retorne el mayor de ellos." */

function verMayor (num1, num2, num3){
    if (num1 > num2 && num1 > num3){
        return num1;
    }
    else if(num2>num1 && num2>num3){
        return num2;
    }  
    else if(num3>num1 && num3>num2){
        return num3;
    }  
    
    return numeroMayor;
}

let numero1 = parseInt(prompt('ingrese el primer numero: '));
let numero2 = parseInt(prompt('ingrese el segundo numero: '));
let numero3 = parseInt(prompt('ingrese el tercer numero: '));


document.write(verMayor(numero1, numero2, numero3)); 




