/*llamada al JQuery (selector) .algo todos los objetos #algo elemento*/
$(document).ready(
	function(){
		console.log("HOLIWIS DESDE JQUERY");
		//alert("HOLIWIS DESDE JQUERY");
		$("img").click(
			function(){
				//$(this).width("150px");
				//$(this).hide("slow");
				$(this).attr('src','images/frijol.png');

			}
		);
		$("#restart").click(
			function(){
				$("img").show("fast");
			}

		);

		var myChange=setInterval(change,1000);
		
		function change(){
			console.log(parseInt(Math.random()*9+1))
			$("#prin").attr('src','images/'+parseInt(Math.random()*9+1)+'.png');
			
		}
		

	}
);

