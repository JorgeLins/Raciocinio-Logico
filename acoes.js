var A;
var B;
var C;
var resultado;
var lucro = 0
var prejuizo = 0
var total = 0

while(A != "F"){
	
	A = prompt("Digite o tipo de ação: ");
	if(A != "F"){
		B = parseInt(prompt("Digite o preço da compra:"));
		C = parseInt(prompt("Digite o preço de venda:"));
		resultado =(C - B);
		total = total + resultado;
		document.write("O resultado da empresa " + A +  " é: " + resultado + "<br>");
		if(resultado > 0){
			document.write("Houve lucro" + "<hr>")
			lucro++
		}
		if (resultado < 0){
			document.write("Houve Prejuizo" + "<hr>");
			prejuizo++
		}
	
	}
	


	
	
	
	
	
	
	
}

document.write("O total de empresas que tiveram lucro: " + lucro + "<br>");
document.write("O total de empresas que tiveram prejuizo: " + prejuizo + "<hr>");

document.write("Resultado total: " + total + "<br");