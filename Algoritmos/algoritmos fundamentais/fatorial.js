var n = parseInt(prompt("Digite um numero"));
function fat(n){
	var fatorial = 1
	for(var i = n; i >= 1; i--){
		fatorial = fatorial * i
	}
	return fatorial;
}
	

document.write("O fatorial de " + n + " é: " + fat(n));
