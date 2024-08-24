function verificarNumeroPrimo(n) {
    if (n <= 1) return false; // Números menores ou iguais a 1 não são primos
    if (n === 2) return true; // 2 é o único número primo par

    // Números pares maiores que 2 não são primos
    if (n % 2 === 0) return false;

    // Verifica divisibilidade até a raiz quadrada de "n"
    for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

// Casos de teste
console.log(verificarNumeroPrimo(0));       // false
console.log(verificarNumeroPrimo(1));       // false
console.log(verificarNumeroPrimo(2));       // true
console.log(verificarNumeroPrimo(3));       // true
console.log(verificarNumeroPrimo(7));       // true
console.log(verificarNumeroPrimo(83));      // true
console.log(verificarNumeroPrimo(100));     // false
console.log(verificarNumeroPrimo(991));     // true
console.log(verificarNumeroPrimo(104729));  // true
console.log(verificarNumeroPrimo(14348907));// false
