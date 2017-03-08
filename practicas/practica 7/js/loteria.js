/*llamada al JQuery (selector) .algo todos los objetos #algo elemento*/
$(document).ready(
	function(){
		console.log("HOLIWIS DESDE JQUERY");
		//alert("HOLIWIS DESDE JQUERY");
		/*$("img").click(
			function(){
				//$(this).width("150px");
				//$(this).hide("slow");
				$("#img1").show("fast");

			}
		);*/
        var i=0;
        
        $("#i2").click(
            function(){
                i++;
                $("#fr2").show("fast");
                if(i==9){
                    alert("GANASTE");
                }
            }
        );
        
        $("#i3").click(
            function(){
                i++;
                $("#fr3").show("fast");
                if(i==9){
                    alert("GANASTE");
                }                
            }
        );
        
        $("#i4").click(
            function(){
                i++;
                $("#fr4").show("fast");
                if(i==9){
                    alert("GANASTE");
                }                
            }
        );
        
        $("#i5").click(
            function(){
                i++;
                $("#fr5").show("fast");
                if(i==9){
                    alert("GANASTE");
                }                
            }
        );
        
        $("#i6").click(
            function(){
                i++;
                $("#fr6").show("fast");
                if(i==9){
                    alert("GANASTE");
                }                
            }
        );
        
        $("#i7").click(
            function(){
                i++;
                $("#fr7").show("fast");
                if(i==9){
                    alert("GANASTE");
                }                
            }
        );
        
        $("#i8").click(
            function(){
                i++;
                $("#fr8").show("fast");
                if(i==9){
                    alert("GANASTE");
                }                
            }
        );
        
        $("#i9").click(
            function(){
                i++;
                $("#fr9").show("fast");
                if(i==9){
                    alert("GANASTE");
                }                
            }
        );
        
        $("#i0").click(
            function(){
                i++;
                $("#fr0").show("fast");
                if(i==9){
                    alert("GANASTE");
                }                
            }
        );
        
		$("#restart").click(
			function(){
				$("#fr2").hide("slow");
                $("#fr3").hide("slow");
                $("#fr4").hide("slow");
                $("#fr5").hide("slow");
                $("#fr6").hide("slow");
                $("#fr7").hide("slow");
                $("#fr8").hide("slow");
                $("#fr9").hide("slow");
                $("#fr0").hide("slow");
                i=0;
			}
		);

		var myChange=setInterval(rand, 500), array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], i, leng;
        
        function rand() {
            $("#prin").attr('src','images/'+parseInt(Math.random()*10)+'.png');		
		}
    
	}
);

