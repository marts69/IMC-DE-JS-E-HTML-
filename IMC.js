function calcularIMC(peso, altura) {
    if (altura <= 0) {
        throw new Error("Altura deve ser maior que zero.");
    }
    const imc = peso / (altura * altura);
    return imc;
}

// Exemplo de uso:
const peso = 70; // kg
const altura = 1.75; // metros

const imc = calcularIMC(peso, altura);
console.log(`Seu IMC é: ${imc.toFixed(2)}`);