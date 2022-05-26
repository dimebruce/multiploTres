let num1 = parseInt(prompt("Ingresa un número: ", "Entre el 1 y el 100"));

if( num1 >= 1 && num1 <= 100 ){
        if( ( num1 % 3 ) == 0 ){
    	      console.log(num1 + ' es multiplo de 3'); 
    } else{
    	      console.log(num1 + ' no es multiplo de 3');
}
} else{
  console.log("Tu número de no está en el rango")
}