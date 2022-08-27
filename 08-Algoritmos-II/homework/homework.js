"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length < 2) return array;
  let indexPivote = Math.floor(Math.random() * array.length);
  let pivote = array[indexPivote];
  let left = [];
  let right = [];

  for (let i = 0; i < array.length; i++) {
    if (i === indexPivote) {
      continue;
    }
    if (array[i] < pivote) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return quickSort(left).concat([pivote], quickSort(right));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length == 1) {
    return array;
  }
  let half = Math.floor(array.length / 2);
  let left = [];
  for (let i = 0; i < half; i++) {
    left.push(array.shift());
  }
  let right = [...array];

  function merge(left, right) {
    let sortedArray = [];
    let newLeft = [...left];
    let newRight = [...right];

    while (newLeft.length > 0 && newRight.length > 0) {
      if (newLeft[0] < newRight[0]) {
        sortedArray.push(newLeft.shift());
      } else {
        sortedArray.push(newRight.shift());
      }
    }
    return [...sortedArray, ...newLeft, ...newRight];
  }

  // poner los elementos donde corresponda.
  return merge(mergeSort(left), mergeSort(right));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
