/*llamada al JQuery (selector) .algo todos los objetos #algo elemento*/
$(document).ready(
	function(){
        var i=0;
        
        $("#i0").click(
            function(){
                eval++;
                $("#fr2").show("fast");
            }
        );
        
        $("#i1").click(
            function(){
                eval++;
                $("#fr3").show("fast");
            }
        );
        
        $("#i2").click(
            function(){
                eval++;
                $("#fr4").show("fast");
            }
        );
        
        $("#i3").click(
            function(){
                eval++;
                $("#fr5").show("fast");
            }
        );
        
        $("#i4").click(
            function(){
                eval++;
                $("#fr6").show("fast");
            }
        );
        
        $("#i5").click(
            function(){
                eval++;
                $("#fr7").show("fast");
            }
        );
        
        $("#i6").click(
            function(){
                eval++;
                $("#fr8").show("fast");
            }
        );
        
        $("#i7").click(
            function(){
                eval++;
                $("#fr9").show("fast");
            }
        );
        
        $("#i8").click(
            function(){
                eval++;
                $("#fr0").show("fast");
            }
        );
        
		$("#restart").click(
			function(){
                location.reload(true);
			}
		);
        
        var array = new Array(54);                                          //Arreglo para la baraja
        var myChange;                                                       //Variable para el intérvalo
        var i,j;                                                            //Variables auxiliares
        //Inicio del juego al hacer click en el botón
        $("#str").click(
			function(){
                var mesa = new Array(9);                                    //Arreglo para la mesa o juego
                for(i=0; i<mesa.length; i++){                               //Primer ciclo para llenado aleatorio
                var ran = Math.floor(Math.random()*53+2);                   //Generación de número aleatorio
                    for(j=0; j<=i; j++){                                    //Ciclo de comprobación de número aleatorio repetido en el arreglo
                        if(mesa[j]==null){                                  
                            mesa[j]=ran;                                    //Inserción de número aleatorio no repetido o primer número
                            $('#i'+i).attr('src', 'images/'+ran+'.jpg');    //Muestra el número en la mesa.
                        }
                        else{
                            if(mesa[j]==ran){                               //Comprueba los números anteriores en el arreglo
                                ran = Math.floor(Math.random()*53+2);       //Genera un nuevo número aleatorio
                                j=0;
                            }
                        }
                    }
                }
                
                for(k=0; k<array.length; k++){                              //Ciclo para llenar la baraja -> Idéntico al llenado de la mesa.
                    var ran = Math.floor(Math.random()*53+2);
                    for(l=0; l<=k; l++){
                        if(array[l]==null){
                            array[l]=ran;
                            console.log(ran);
                        }
                        else{
                            if(array[l]==ran){
                                ran = Math.floor(Math.random()*53+2);
                                l=0;
                            }
                        }
                    }
                }
            
            myChange=setInterval(test, 1000);                               //Timer de control de muestra de la baraja
            }
		);
        //Fin de la función del botón inicio
        
        var k, l, m=0, eval=0;                                                      //Variables auxiliares
        
        //Inicio de función de muestra de baraja aleatoria.
        function test(){
            if(m<array.length){                                             
                $('#prin').attr('src', 'images/'+array[m]+'.jpg');          //Muestra la posición del arreglo
                m++;
                if(eval==9){                                                //Comprobación constante sobre la mesa
                    $('#bannerV').show('fast');                             //Mensaje ganador
                    clearInterval(myChange);                                //Detiene el timer
                }
                else if(m==array.length){                                   
                     $('#bannerD').show('fast');                            //Mensaje de derrota y fin de la baraja
                }
            }
            
        }
        //Fin de función de baraja aleatoria
	}
);