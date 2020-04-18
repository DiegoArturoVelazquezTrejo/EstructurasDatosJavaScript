/*
Estructuras de Datos en JavaScript
Map/Location Data -> Usamos una gráfica, puntos, trayectorias, caminos.
Ordenamiento y rápidas inserciones y eliminaciones -> Lista doblementeligada
Información HTML -> Árbol Binario
*/

/* Linked List : Colección de Nodos  */
/* Clase nodo */
class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}
/* Cuerpo de la lista simple ligada */
class SinglyLinkedList{
  constructor(){
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  /* Método para agregar un elemento a la lista */
  push(val){
    var newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = this.head;
    }else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  /* Método equivalente a eliminaUltimo  */
  pop(){
    if(length == 0) return undefined;
    var current = this.head;
    var newTail = current;
    while(current.next){
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;val
    if(this.length == 0)
      this.head = this.tail = null;
    return current;
  }
  /* Método equivalente a eliminaPrimero */
  shift(){
    if(!this.head)
      return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if(this.length == 0)
      this.head = this.tail = null;
    return currentHead;
  }
  /* Método para agregar al inicio, equivalente a agregaPrimero */
  ushift(val){
    var newNode = new Node(val);
    if(!this.head)
      this.head = this.tail = newNode;
    else{
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  /* Método para obtener el elemento posicionado en el índice como parámetro */
  get(index){
    if(this.length == 0 || index >= this.length) return undefined;
    var actualNode = this.head;
    var counter = 0;
    while(counter != index){
      actualNode = actualNode.next;
      counter++;
    }
    return actualNode;
  }
  /* Método para cambiar el valor de un nodo */
  set(index, val){
    var foundNode = this.get(index);
    if(foundNode){
      foundNode.val = val;
      return true;
    }
    return false;
  }
  /* Método para insertar un nuevo nodo */
  insert(index, value){
    if(index < 0 || index > this.length) return false;
    if(index == this.length) return !!this.push(value);
    if(index == 0) return !!this.unshift(value);
    var prev = this.get(index-1);
    var newNode = newNode(value);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  /* Méodo para remover un elemento en un índice dado */
  remove(index){
    if(index < 0 || index >= this.length) return undefined;
    if(index === 0) return this.shift();
    if(index === this.length - 1) return this.pop();
    var prevNode = this.get(index -1);
    var removed = prevNode.next;
    prevNode.next = remove.next;
    this.length--;
    if(this.length === 0)
      this.head = this.tail = null;
    return removed;
  }
  /* Método para regresar la reversa de la lista */
  reverse(){
    var reversed = new SinglyLinkedList();
    var node = this.head;
    while(node){
      reversed.unshift(node.val);
      node = node.next;
    }
    return reversed;
  }
}

/* Clase Pila First In last Out */
class Stack{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  /* Método para insertar un elemento en una pila */
  push(val){
    var newNode = new Node(val);
    if(!this.first){
      this.first = newNode;
      this.first = this.last;
    }
    else{
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  /* Método para sacar un elemento de la pila */
  pop(){
    if(this.size === 0) return null;
    var temp = this.first;
    if(this.first == this.last){
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}
/* Clase para la Cola Queue First In First Out */
class Queue{
  constructor(){
    this.size = 0;
    this.head = null;
    this.tail = null;
  }
  /* Métod para ingresar un elemento a la cola */
  euqueue(val){
    var newNode = new Node(val);
    if(this.size == 0)
      this.head = this.tail = newNode;
    else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return ++this.size;
  }
  /* Método para sacar un elemento de la cola */
  dequeue(){
    if(this.size == 0) return null;
    ver temp = this.first;
    if(this.first == this.last)
      this.last = null;
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
/* Estructura de datos Arbol Binario*/
/* Casos en donde se pueden usar los árboles binarios:
1. HTML, DOM (por su estructura)
2. Ruteo de Redes
3. Sintaxis de lenguajes
4. Inteligencia Artificial -> Minimax Tree
5. Estructura de los archivos de un Sistema Operativo
6. JavaScript Object Notation JSON */

/* Categorías/Familias/Tipos de Árboles Binarios
1. Heaps
2. B-Trees
3. Árboles Binarios:
  a) AVL
  b) Binary Search Trees
  c) Rojinegros
  d) Ordenados
*/
/* Clase NodoArbolBinario */
class BNode{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
/* Clase BinarySearchTree para la estructura de datos */
class BinarySearchTree{
  /* Constructor de la clase BinarySearchTree*/
  constructor(){
    this.root = null;
    this.elements = 0;
  }
  /* Método para agregar un elemento */
  insert(value){
     var newNode = new BNode(value);
     if(this.root == null){
       this.root = newNode;
       this.elements++;
       return this;
     }
     else{
       var current = this.root;
       while(true){
         if(value == current.value) return undefined;
         if(value < current.value){
           if(current.left == null){
             current.left = newNode;
             this.elements++;
             return this;
           }else{
             current = current.left;
           }
         }else if(value > current.value){
           if(current.right == null){
             current.right = newNode;
             this.elements++;
             return this;
           }else{
             current = current.right;
           }
         }
       }
     }
  }
  /* Método para encontrar un elemento en el árbol binario */
  find(value){
    if(this.root == null) return false;
    var current = this.root;
    var found = false;
    while(current && !found){
       if(value < current.value)
         current = current.left;
       else if(current > current.value)
         current = current.right;
       else
         found = true;
    }
    return found;
  }

  /* Algoritmos para recorrer árboles binarios */
  /* Vamos a usar la estructura de datos Queue */
  BFS(){
    var data = [];
    var queue = [];
    var node = this.root;
    queue.push(node);
    while(queue.length){
      node = queue.shift();
      data.push(node);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    return data;
  }
  /* Depth First Search*/
  DFS_preOrder(){
    var data = [];
    var current = this.root;
    function traverse(node){
      data.push(node);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
  /* Depth First Search*/
  DFS_postOrder(){
    var data = [];
    var current = this.root;
    function traverse(node){
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      data.push(node);
    }
    traverse(current);
    return data;
  }
  /* Depth First Search*/
  DFS_inOrder(){
    var data = [];
    var current = this.root;
    function traverse(node){
      if(node.left) traverse(node.left);
      data.push(node);
      if(node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
}

/* Binary Heaps
Son una categoría de árboles
En un maxBinaryHeap los padres son siempre más grandes que los hijos.
En minBinaryHeap los hijos van a ser más grandes que los padres
2n + 1 para obtener el hijo izquierdo
2n + 2 para obtener el hijo derecho
Para encontrar los padres solo le restamos uno a la posición actual y dividimos entre 2 y análogamente para el padre dle nodo derecho */
class MinBinaryHeap{
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

/* Gráficas
Aplicaciones de las gráficas:
1. Mapear ubicaciones
2. Routing
3. Redes Sociales
4. Recomendaciones
*/
class Graph{
  /* Constructor de la clase Graph*/
  constructor(){
    this.adjacencyList = {};
  }
  /* Método para agregar un vértice*/
  addVertex(vertex){
    if(!this.adjacencyList[vertex])   this.adjacencyList[vertex] = [];
  }
  /* Agregando aristas */
  addEdge(v1, v2){
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  /* Eliminando un arista */
  removeEdge(v1, v2){
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      v => v !== v2;
    );
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(
      v => v !== v1;
    );
    /* Eliminando un vértice */
    removeVertex(v1){
      while(this.adjacencyList[v1].length){
        const adjacentVertex = this.adjacencyList[v1].pop();
        this.removeEdge(v1, adjacentVertex);
      }
      delete this.adjacencyList[v1];
    }
  }
  /* Graph Traversal (searching, visiting nodes, updating )*/

  /* Recorriendo una gráfica con DFS */
  depthFirstRecursive(start){
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    /* Función auxiliar */
    (function dfs(vertex){
      if(!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      this.adjacencyList[vertex].forEach(neighbor => {
        if(!visited[neighbor]){
          return dfs(neighbor);
        }
      })
    })(start);

    return result;
  }
  /* Recorriendo una gráfica con DFS */
  depthFirstIterative(start){
    const stack = [start];
    const result = [];
    const visited = {};

    visited[start] = true;
    while(stack.length){
      let currentVertex = stack.pop();
      result.push(currentVertex);
      /* Vamos a agregar los elementos vecinos del vértice */
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]){
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
  /* Breath First Search */
  breathFirstSearch(start){
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    while(queue.length){
      currentVertex = queue.shift();
      result.push(currentVertex);
      /* Recorremos los vecinos del vértice actual */
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]){
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
      return result;
    }
  }
}
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

/* Programación Dinámica
Definición:
  Es un método de resolver problemas complejos haciéndolo partes de una collección
  de tal forma que sean subproblemas y los solucionemos y almacenemos sus resultados.
  Para desarrollar una solución óptima.

Como sabemos en qué situaciones en donde funciona?
Overlapping subproblems -> if it can be broken down into subproblems which are reused several times.
Como la secuencia de Fibonacci (por ejemplo).
Optimal SIbstructure -> si se puede construir con soluciones óptimas de subproblemas.
*/
function fib(n){
  if(n <= 2) return 1; /* Nótese que para calcular fib(5) se calcula fib(3) pero también se vuelve a calcular para fib(4) y así ...*/
  return fib(n-1) + fib(n-2);
}
/* Vamos a ver qué sucede cuando utilizamos la programación dinámica */
/* Recursion + Memoization La desventaja es que es recursivo y podemos llegar a un StackOverFlow Error */
function fib_memo(n, memo=[]){
  if(memo[n] !== undefined) return memo[n];
  if(n<=2) return 1;
  var res = fib(n-1, memo) + fib(n-2, memo);
  memo[n] = res;
  return res;
}
/* Button Up más eficiente en memoria que fib_memo */
function fib_table(n){
  if(n<=2) return 1;
  var fibNums = [0,1,1];
  for(var i = 3; i <= n; i++){
    fibNums[i] = fibNums[i-1]+fibNums[1-2];
  }
  return fibNums[n];
}
