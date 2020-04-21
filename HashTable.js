/*
HashTables
Almacenan llave-valor.
Usaremos un arreglo para implementar una hashtable
Necesitamos una manera de convertir las llaves en índices válidos paea un arreglo (para eso son las funciones hash function)
Una función hash
Va a mapear una entrada a una salida de un tamaño fijo
Una función hash tiene que ser rápida ( O(1) ) y tiene que ser Determinista y que distribuya los valores
uniformemente.
*/

// Función Simple Hash
function hash(key, arrayLen){
  let total = 0;
  let WEIRD_PRIME = 31;
  for(let i = 0; i < Math.min(key.length, 100); i++){
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}
/* Como vamos a manejar las Colisiones (repeticiones de número para distintas llaves)
  1. Separate Chaining
  2. Linear Probing
*/
class HashTable{
  /* Constructor de la clase HashTable*/
  constructor(size = 10){
    this.keyMap = new Array(size);
  }
  _hash(key){
    let total = 0;
    let WEIRD_PRIME = 31;
    for(let i = 0; i < Math.min(key.length, 100); i++){
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  /* Método set*/
  set(key, value){
    let index = this._hash(key);
    if(!this.keyMap[index]){
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  /* Método get*/
  get(key){
    let index = this._hash(key);
    if(this.keyMap[index]){
      for(let i = 0; i < this.keyMap[index].length; i++){
        if(this.keyMap[index][i][0] == key){
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
  /* Método para obtener toods los valores del hashMap*/
  values(){
    let valuesArr = [];
    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let j = 0; j < this.keyMap[i].length; j++){
          if(!valuesArr.includes(this.keyMap[i][j][1])){
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
  /* Método para obtener toods las llaves del hashMap*/
  keys(){
    let valuesKeys = [];
    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let j = 0; j < this.keyMap[i].length; j++){
          if(!valuesKeys.includes(this.keyMap[i][j][0])){
            valuesKeys.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return valuesArr;
  }
}
/* Complejidades:
Insertar O(1)
Eliminar O(1)
Acceder O(1)
*/
