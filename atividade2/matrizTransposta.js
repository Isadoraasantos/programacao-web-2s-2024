function transporMatriz(A) {
    
    function imprimirMatriz(matriz) {
        matriz.forEach(linha => console.log(linha.join(' ')));
    }

    console.log("Matriz Original:");
    imprimirMatriz(A);

    
    let matrizTransposta = [];
    for (let i = 0; i < A[0].length; i++) {
        matrizTransposta[i] = [];
        for (let j = 0; j < A.length; j++) {
            matrizTransposta[i][j] = A[j][i];
        }
    }

    console.log("\nMatriz Transposta:");
    imprimirMatriz(matrizTransposta);
}


const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

transporMatriz(matriz);
