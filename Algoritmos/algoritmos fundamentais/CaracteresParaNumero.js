var sequencia = prompt("informe um numero");
var  caractere;
var codigo;
var numero = 0;
var n = sequencia.length
for(var i = 0; i < n; i++){
	caractere = sequencia.charAt(i);
	codigo = caractere.charCodeAt();
	numero = numero *10 + (codigo - 48)
}
document.write("String original: " + sequencia + "<br>")
document.write("o numero decimal correspondente é: " + numero + "<br>")
var dobro = numero + numero
document.write("o dobro desse numero é: " + dobro)