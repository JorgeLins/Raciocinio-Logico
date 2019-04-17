function fat(n){
	
	var fatorial = 1
	for(var i = n; i >= 1; i--){
		fatorial = fatorial * i
	}
	return fatorial;
}

var n = prompt("digite a quantidade de termos");
var x = prompt("digite o valor de X");

var termo;
var sinal = 1
var j = 1
var seno = 0

for(var i = 1; i <= n; i++){
	
	termo = Math.pow(x,j)/ fat(j);
	seno = seno + sinal * termo;
	sinal = sinal * -1;
	j = j + 2;
	
}

document.write("O Sen(" + x + ") é igual a: " + seno + "<br>");

