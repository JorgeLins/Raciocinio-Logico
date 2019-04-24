var N = prompt("Indique o numero a ser invertido");

var inversao = 0;
var resto;


for(var q = N; q > 0; ){
	
	resto = q % 10;
	inversao = inversao * 10 + resto;
	q = Math.floor(q / 10);
	
}


document.write("Número original: " + N + "<br>");
document.write("Número invertido: " + inversao);