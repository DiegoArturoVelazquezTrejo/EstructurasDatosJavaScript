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
