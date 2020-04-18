/* Cola de prioridad
Los elementos con mayor prioridad son usados antes que aquellos que tienen menos prioridad.
Tiene que buscar los elementos de mayor prioridad. Se pueden implementar con un arreglo o con una lista.
  ________________________________________________________
  |   prioridad 3: |  prioridad1   |   prioridad 2:      |
  --------------------------------------------------------
Vamos a construirla con un MIN HEAP
1. Por ejemlo procesos de un sistema operativo que tienen mayor prioridad que otros.
2. Forma de destinar servicios */
class PriorityNode{
  /* Constructor de la clase PriorityNode*/
  constructor(value, priority){
    this.value = value;
    this.priority = priority;
  }
}
/* Vamos a usar estos nodos que tienen el valor y la prioridad del elemento */
class PriorityQueue{
  /* Constructor de la clase PriorityQueue*/
  constructor(){
    this.values = [];
  }
  /* Para agregar, agregamos al final del arreglo y ya
  Ahora comparamos con su papa, si es mayor, intercambiamos y así recursivamente con su papá */
  enqueue(element, priority){
    var newNode = new PriorityNode(element, priority);
    this.values.push(newNode);
    whie.bubbleUp();
  }
  /* Método para "balancear" el heap*/
  bubbleUp(){
    this.values.length -1;
    const element = this.values[idx];
    while(idx > 0){
      let parentIdx = Math.floor((idx-1)/2);
      let parent = this.values[parentIdx];
      if(element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  /* Eliminando la raíz de un heap */
  dequeue(){
    const min = this.values[0];
    const end = this.values.pop();
    if(this.values.length > 0){
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
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
        if(leftChild.priority < element.priority)
          swap = leftChildIdx;
      }
      if(rightChildIdx < length){
        rightChild = this.values[rightChildIdx];
        if(swap === null && rightChild.priority < element.priority ||
          (swap !== null && rightChild.priority < leftChild.priority))
          swap = rightChildIdx;
      }
      if(swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}
/* Big O Notation para Heaps
Insertar -> O(log n)
eliminar -> O(og n)
Buscar -> O(n) Porque no hay un orden establecido que se pueda saber, por lo que tendríamos que recorrer el árbol
*/
