/** 
  Write a function that takes in a non-empty array of distinct integers and an
  integer representing a target sum. If any two numbers in the input array sum
  up to the target sum, the function should return them in an array, in any
  order. If no two numbers sum up to the target sum, the function should return
  an empty array.
 */

  /** Sample input  = [3, 5, -4, 8, 11, 1, -1, 6] 
   * targetSum = 10
   * Sample output = [11, -1]
   */ 

// --- Parte 1: Recolección de datos y suma objetivo ---
function recolectarNumeros() {
  let numeros = [];
  while (true) {
    let entrada = prompt("Ingresa un número (o escribe 'fin' para terminar):");
    if (entrada.toLowerCase() === "fin") {
      break;
    }
    let numero = parseFloat(entrada);
    if (!isNaN(numero)) {
      numeros.push(numero);
    } else {
      alert("Eso no es un número válido.");
    }
  }
  return numeros;
}

function pedirSumaObjetivo() {
  let entrada = prompt("¿Cuál debe ser la suma de dos de los números?");
  let suma = parseFloat(entrada);
  while (isNaN(suma)) {
    entrada = prompt("Eso no es un número válido. Inténtalo de nuevo:");
    suma = parseFloat(entrada);
  }
  return suma;
}

// --- Parte 2: Verificación de la suma ---
function buscarParejaQueSume(numeros, objetivo) {
  for (let i = 0; i < numeros.length; i++) {
    for (let j = i + 1; j < numeros.length; j++) {
      if (numeros[i] + numeros[j] === objetivo) {
        return [numeros[i], numeros[j]];
      }
    }
  }
  return []; // No se encontró ninguna pareja
}

// --- Programa principal ---
function programaPrincipal() {
  let numeros = recolectarNumeros();
  let objetivo = pedirSumaObjetivo();
  let pareja = buscarParejaQueSume(numeros, objetivo);

  if (pareja.length > 0) {
    alert(`¡Encontrado! ${pareja[0]} + ${pareja[1]} = ${objetivo}`);
  } else {
    alert("[]");
  }
}

programaPrincipal(); // Ejecutar todo
