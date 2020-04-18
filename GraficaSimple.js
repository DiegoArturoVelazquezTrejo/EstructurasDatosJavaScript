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
