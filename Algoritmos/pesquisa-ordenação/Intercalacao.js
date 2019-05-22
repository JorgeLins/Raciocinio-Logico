var A = [15,18,42,51];
var B = [8,11,16,17,44,58,71,74];
var C = []
var tamanho = A.length + B.length
var i = 0
var p = 0

for(var k = 0; k < tamanho; k++){

	if(A[i] < B[p] || p == B.length){
		C[k] = A[i];
		i++
	}else{
		C[k] = B[p];
		p++;
	}
}

document.write(C);