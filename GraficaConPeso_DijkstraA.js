/* Gráfica con Pesos para el algoritmo de Dijkstra */
class WeightedGraph{
  /* Constructor de la clase WeightedGraph*/
  constructor(){
    this.adjacencyList = {};
  }
  /* Método para agregar un vértice*/
  addVertex(vertex){
    if(!this.adjacencyList[vertex])   this.adjacencyList[vertex] = [];
  }
  /* Agregando aristas */
  addEdge(v1, v2, weight){
    this.adjacencyList[v1].push({node:v2, weight});
    this.adjacencyList[v2].push({node:v1, weight});
  }
  Dijkstra(start, finish){
    const nodes = PriorityQueue();
    const distances = {};
    const previous = {};
    const path = [];
    // Build up initial state
    for(let vertex in this.adjacencyList){
      if(vertex === start){
        distances[vertex] = 0;
        nodes.euqueue(vertex, 0);
      }else{
      distances[vertex] = Infinity;
      nodes.euqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    const smallest;
    // as long there is something to visit
    while(nodes.values.length){
      smallest = nodes.dequeue().val;
      if(smallest === finish){
        // we are done and need to build up path to return at the end
        while(previous[smallest]){
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if(smallest || distances[smallest] !== Inifinity){
        for(let neighbor in this.adjacencyList[smallest]){
          // Find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          // calculate new distances to neighboring node
          let candidate = distances[smallest]+nextNode.weight;
          let nextNeighbor = nextNode.node;
          if(candidate < distances[nextNode.node]){
            // updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            // updating previuos- how we got to neighbor
            previous[nextNeighbor] = smallest;
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}
/* Bases del Algoritmo de Dijkstra
  1. Visitamos un nodo, tomamos el nodo vecino con la menor distancia
  2. Para cada vecino sumamos su distancia y nos quedamos con el que tenga la menor distancia.
*/

class PriorityQueueNaive{
  /* Constructor de la clase PriorityQueueNaive*/
  constructor(){
    this.values = [];
  }
  /* Método para agregar un elemento a la cola de prioridad */
  enqueue(val, priority){
    this.values.push({val, priority});
    this.sort();
  }
  /* Método para obtener el primer elemento de la cola de prioridad */
  dequeue(){
    return this.value.shift();
  }
  /* Método para ordenar la cola de prioridad */
  sort(){
    this.value.sort((a,b) => a.priority - b.priority);
  }
}

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

