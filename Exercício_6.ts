function retornarElemento<T>(array: T[], index: number): T {
    return array[index];
}

const numeros = [10, 20, 30];
const resultadoNumero = retornarElemento(numeros, 1);
console.log(resultadoNumero); 

const letras = ["a", "b", "c"];
const resultadoLetras = retornarElemento(letras, 0);
console.log(resultadoLetras); 

