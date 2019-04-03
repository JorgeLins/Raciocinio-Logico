var n = parseInt(prompt("Digite um numero"));
var fatorial = 1
for(var i = n; i >= 1; i--){
	fatorial = fatorial * i
}

document.write("O fatorial de " + n + " é: " + fatorial);