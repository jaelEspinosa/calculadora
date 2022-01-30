'use strict';

window.addEventListener('load', ()=>{



//***************************eventos con teclado*******************
let opKey = "no" 
window.addEventListener('keydown', function(evento){
		 
    let tecla = evento.key
    console.log("es de tipo " + typeof tecla)
    console.log("[keypress] has pulsado", String.fromCharCode(evento.keyCode));
    console.log('[keydonw??] Tecla presionada: ',evento.key);

	switch(tecla){
	       case "Backspace":
		            resetear()
		            break
		   case "Delete":
		            resetear()
		            break

	       case "Enter":
	                igualar()
	                break


	        }   // end switch


})  // end keydown


window.addEventListener('keypress', function(evento){
	 	
   let tecla = String.fromCharCode(evento.keyCode)
  
// console.log(tecla)
    
   switch(tecla){

   	    case "1":
   	     	resultado.textContent = resultado.textContent + '1'
	        operaciones.textContent = operaciones.textContent + '1'
	        length()
	        igual.disabled=false
	        break
	    case "2":
   	     	resultado.textContent = resultado.textContent + '2'
	        operaciones.textContent = operaciones.textContent + '2'
	        length()
	        igual.disabled=false
	        break
	    case "3":
   	     	resultado.textContent = resultado.textContent + '3'
	        operaciones.textContent = operaciones.textContent + '3'
	        length()
	        igual.disabled=false
	        break 
	    case "4":
   	     	resultado.textContent = resultado.textContent + '4'
	        operaciones.textContent = operaciones.textContent + '4'
	        length()
	        igual.disabled=false
	        break
	    case "5":
   	     	resultado.textContent = resultado.textContent + '5'
	        operaciones.textContent = operaciones.textContent + '5'
	        length()
	        igual.disabled=false
	        break
	    case "6":
   	     	resultado.textContent = resultado.textContent + '6'
	        operaciones.textContent = operaciones.textContent + '6'
	        length()
	        igual.disabled=false
	        break
	    case "7":
   	     	resultado.textContent = resultado.textContent + '7'
	        operaciones.textContent = operaciones.textContent + '7'
	        length()
	        igual.disabled=false
	        break               
        case "8":
   	     	resultado.textContent = resultado.textContent + '8'
	        operaciones.textContent = operaciones.textContent + '8'
	        length()
	        igual.disabled=false
	        break
	    case "9":
   	     	resultado.textContent = resultado.textContent + '9'
	        operaciones.textContent = operaciones.textContent + '9'
	        length()
	        igual.disabled=false
	        break
	    case "0":
   	     	resultado.textContent = resultado.textContent + '0'
	        operaciones.textContent = operaciones.textContent + '0'
	        length()
	        igual.disabled=false
	        break
	    i
	    case ".":
	      if (puntoDecimal == "no"){
   	     	resultado.textContent = resultado.textContent + '.'
	        operaciones.textContent = operaciones.textContent + '.'
	        length()
	        puntoDecimal = "si"
	        igual.disabled=false
	        break
	      }else{
	    	break
	       }              
        case "+":
           if (opKey == "no"){
	           	  sumar()
		          opKey = "si"
		          break	       
           }else{
              	  break
           }        
	       
	    case "-":
	      if (opKey == "no"){
			      opKey = "si"
			      restar()
			      break
	      }else{
	      	      break 
	       }
	       	         
	    case "*":
	      if (opKey == "no"){ 
		          opKey = "si"
			      multiplicar()
			      break 
	      }else{
	   	          break
	       }

	    case "/":
	      if (opKey == "no"){ 
		          opKey = "si"
			      dividir()
			      break   
          }else{
          	      break
          }

     } // end switch
        // document.getElementById('igual').focus() 
});  // end keypress
   
function sumar(){
		console.log('sumo')
		operandoA = resultado.textContent;
		operacion = "+"
		igual.disabled=true
			if (operaciones.textContent !="" ){
				operaciones.textContent = operaciones.textContent + ' + '
				limpiar();
			    desactivarOperaciones();
			}else{
				resetear()
			}	
         }

function restar(){
		console.log('resto')
		operandoA = resultado.textContent;
		operacion = "-"
		igual.disabled=true
			if (operaciones.textContent !="" ){
				operaciones.textContent = operaciones.textContent + ' - '
				limpiar();
			    desactivarOperaciones();
			}else{
				resetear()
			}	
         }
function multiplicar(){
		console.log('multiplico')
		operandoA = resultado.textContent;
		operacion = "X"
		igual.disabled=true
			if (operaciones.textContent !="" ){
				operaciones.textContent = operaciones.textContent + ' X '
				limpiar();
			    desactivarOperaciones();
			}else{
				resetear()
			}	
         }
function dividir(){
		console.log('divido')
		operandoA = resultado.textContent;
		operacion = "/"
		igual.disabled=true
			if (operaciones.textContent !="" ){
				operaciones.textContent = operaciones.textContent + ' / '
				limpiar();
			    desactivarOperaciones();
			}else{
				resetear()
			}	
         }         

function igualar(){
	if(resultado.textContent.length >=1){
		operandoB = resultado.textContent;
	    operaciones.textContent = operaciones.textContent + ' = '
	    opKey = "no"
	    resolver();
	}else{
		resetear()

	}
	

}
	 

//           ****************Con Raton***********************


// variables

let operandoA;
let operandoB;
let operacion;
let puntoDecimal="no"

let teclaOperacion = document.getElementsByClassName(['operacion'])
let teclaNumeros=document.getElementsByClassName('numero')
console.log(teclaOperacion)
console.log(teclaNumeros)



let botones = document.getElementsByTagName('button')
let resultado = document.getElementById('resultado');
let reset = document.getElementById('reset');
let suma = document.getElementById('suma');
let resta = document.getElementById('resta');
let multiplicacion = document.getElementById('multiplicacion');
let division = document.getElementById('division');
let igual = document.getElementById('igual');
let uno = document.getElementById('uno');
let dos = document.getElementById('dos');
let tres = document.getElementById('tres');
let cuatro = document.getElementById('cuatro');
let cinco = document.getElementById('cinco');
let seis = document.getElementById('seis');
let siete = document.getElementById('siete');
let ocho = document.getElementById('ocho');
let nueve = document.getElementById('nueve');
let cero = document.getElementById('cero');
let decimal=document.getElementById('decimal')


// eventos 

decimal.onclick = function(e){
	if(puntoDecimal=="no"){
		resultado.textContent = resultado.textContent + '.'
		operaciones.textContent = operaciones.textContent + '.'
		
		puntoDecimal="si"
	}
	
}

// ******************teclas de NUMEROS


uno.onclick = function(e){
	resultado.textContent = resultado.textContent + '1'
	operaciones.textContent = operaciones.textContent + '1'
	length()
	igual.disabled=false
}
dos.onclick = function(e){
	resultado.textContent = resultado.textContent + '2'
	operaciones.textContent = operaciones.textContent + '2'
	length()
	igual.disabled=false
}
tres.onclick = function(e){
	resultado.textContent = resultado.textContent + '3'
	operaciones.textContent = operaciones.textContent + '3'
	length()
	igual.disabled=false
}
cuatro.onclick = function(e){
	resultado.textContent = resultado.textContent + '4'
	operaciones.textContent = operaciones.textContent + '4'
	length()
	igual.disabled=false
}
cinco.onclick = function(e){
	resultado.textContent = resultado.textContent + '5'
	operaciones.textContent = operaciones.textContent + '5'
	length()
	igual.disabled=false
}
seis.onclick = function(e){
	resultado.textContent = resultado.textContent + '6'
	operaciones.textContent = operaciones.textContent + '6'
	length()
	igual.disabled=false
}
siete.onclick = function(e){
	resultado.textContent = resultado.textContent + '7'
	operaciones.textContent = operaciones.textContent + '7'
	length()
	igual.disabled=false
}
ocho.onclick = function(e){
	resultado.textContent = resultado.textContent + '8'
	operaciones.textContent = operaciones.textContent + '8'
	length()
	igual.disabled=false
}
nueve.onclick = function(e){
	resultado.textContent = resultado.textContent + '9'
	operaciones.textContent = operaciones.textContent + '9'
	length()
	igual.disabled=false
}
cero.onclick = function(e){
	resultado.textContent = resultado.textContent + '0'
	operaciones.textContent = operaciones.textContent + '0'
	length()
	igual.disabled=false
}


// **************TECLAS DE OPERACION*******************


reset.onclick = () => resetear();
suma.onclick = () =>	sumar();
resta.onclick = () => restar();
division.onclick = () => dividir();
multiplicacion.onclick = () => multiplicar();
igual.onclick = () => igualar();


function limpiar() {
	resultado.textContent = ""
	puntoDecimal = "no";
}

function resetear() {
	for(let i in resultado.textContent){
		if (resultado.textContent == "."){
			puntoDecimal="si"
		}else{
			puntoDecimal="no"
		}
	}
   
	resultado.textContent= "";
	operaciones.textContent=""
	operandoA = 0;
	operandoB = 0;
	operacion = "";
	opKey="no"
	activarOperaciones()
	activarNumeros()
	igual.disabled=false
	
	
    
}
function desactivarOperaciones(){
    for( let i=0; i<teclaOperacion.length; i++){
    	
    	teclaOperacion[i].disabled = true	
       }	
    	
    }

function activarOperaciones(){
	for( let i=0; i<teclaOperacion.length; i++){
    	
    	teclaOperacion[i].disabled = false	
       }


}

function desactivarNumeros() {
    	for(let i in teclaNumeros){
    		if (typeof teclaNumeros[i] == 'object'){
                teclaNumeros[i].disabled = true
    		}
    		
            console.log(' es un ' + typeof teclaNumeros[i])
    	}
    }    


function activarNumeros() {
    	for(let i=0; i<teclaNumeros.length;i++){
    		teclaNumeros[i].disabled = false

    	}
    }  


//************RESOLVER OPERACIONES*******************


function resolver(){
	let res = 0;
				
			switch(operacion){
			case "+":
			  res = parseFloat(operandoA)+parseFloat(operandoB);
			  break;
			case "-":
			  res = parseFloat(operandoA)-parseFloat(operandoB);
			  break;
			case "/":
			  res = parseFloat(operandoA)/parseFloat(operandoB);
			  break;
			case "X":
			  res = parseFloat(operandoA)*parseFloat(operandoB);
			  break;
			case "":
			  resetear()
			  break;		  
		}
		resetear();
		
        let resRedon = Math.round((res+ Number.EPSILON) * 1000) / 1000;
        
		resultado.textContent = resRedon;
        operaciones.textContent = resRedon;
       	let resultadoDec= parseFloat(resultado.textContent)
	    let resultadoEnt= parseInt(resultado.textContent)
	    let sigResEnt=resultadoEnt + 1
    
        console.log('resultado' + resultadoDec)
        console.log('resultado entero' + resultadoEnt)
        console.log('resultado ent mas uno' + sigResEnt)

        if (resultadoDec > resultadoEnt && resultadoDec<sigResEnt){
      	    puntoDecimal="si"
        }else{
          puntoDecimal= "no"  
      	     }
       
       	length();
}

// ***********ERROR NUM DEMASIADO LARGO***************

function length(){
	  if (resultado.textContent.length >= 14){
        resultado.style.background ='red'
        resultado.textContent='ERROR'  
        
        desactivarNumeros()
        desactivarOperaciones()
		let time = setTimeout( ()=>{
			resultado.style.background ='lightcyan'
			limpiar();
	        resetear();
			console.log('error ejecutado')
        		},650);
		
				
    	    }
		
}
	
}) // end load