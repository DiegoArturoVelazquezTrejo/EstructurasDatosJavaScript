/* Binary Heaps
Son una categoría de árboles
En un maxBinaryHeap los padres son siempre más grandes que los hijos.
En minBinaryHeap los hijos van a ser más grandes que los padres
2n + 1 para obtener el hijo izquierdo
2n + 2 para obtener el hijo derecho
Para encontrar los padres solo le restamos uno a la posición actual y dividimos entre 2 y análogamente para el padre dle nodo derecho */
class MaxBinaryHeap{
  /* Constructor de la clase MaxBinaryHeap*/
  constructor(){
    this.values = [];
  }
  /* Para agregar, agregamos al final del arreglo y ya
  Ahora comparamos con su papa, si es mayor, intercambiamos y así recursivamente con su papá */
  insert(element){
    this.values.push(element);
    this.bubbleUp();
  }
  /* Método para "balancear" el heap*/
  bubbleUp(){
    this.values.length -1;
    const element = this.values[idx];
    while(idx > 0){
      let parentIdx = Math.floor((idx-1)/2);
      let parent = this.values[parentIdx];
      if(element < parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  /* Eliminando la raíz de un heap */
  extractMax(){
    const max = this.values[0];
    const end = this.values.pop();
    if(this.values.length > 0){
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
  /* Método para rebalancear al heap una vez que se eliminó la raíz */
  sinkDown(){
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while(idx < length){ /* true */
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      /* Veamos si es un índice válido */
      if(leftChildIdx < length){
        leftChild = this.values[leftChildIdx];
        if(leftChild > element)
          swap = leftChildIdx;
      }
      if(rightChildIdx < length){
        rightChild = this.values[rightChildIdx];
        if(swap === null && rightChild > element ||
          (swap !== null && rightChild > leftChild))
          swap = rightChildIdx;
      }
      if(swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}
