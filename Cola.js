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
