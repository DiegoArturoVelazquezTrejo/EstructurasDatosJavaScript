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
