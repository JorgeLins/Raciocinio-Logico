var numero = prompt("informe o numero");

var q = numero;
var r = [];

for(var i = 0; q > 0; i++){
	
	r[i] = q % 2;
	q = Math.floor(q/2)	
	
}

document.write("numero original: " + numero + "<br>");
document.write("numero em binario: ")

for(var i = r.length-1; i >= 0; i--){
	
	document.write(r[i]);
	
}