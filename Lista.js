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
