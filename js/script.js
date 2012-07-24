//poner todo el js aquí.
$(document).on("ready",main)

function main(){
    //alert("Hola jQuery");
    $("#container").append("<section class='b'>"+
                "<h2>Rama desde jQuery</h2>"+
                "<code>Este código fue escrito con jQuery 1.7.2 en la rama dev</code>"+
            "</section>");
    $("#iniciar").click(function(event){
		event.preventDefault();
		alert("Previniendo un href: "+event.preventDefault())
                if(confirm("Deseas ir a mi twitter @MaoAiz?"))
                    top.location =  $("#iniciar").attr("href");
	});
}