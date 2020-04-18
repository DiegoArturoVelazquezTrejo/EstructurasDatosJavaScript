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
