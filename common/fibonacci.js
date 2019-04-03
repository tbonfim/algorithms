
/** Fibonacci:
 * 
 * returns the nth number inside Fibonacci
 */

var fibonacci = function(n) {
    if ( n === 0 ) return 0;
    if ( n === 1 ) return 1;
    
    var ppfib = 0;
    var pfib = 1;
    var fib = 0;
    for (var i = 2; i <= n; i++) {
        fib = ppfib + pfib;
        ppfib = pfib;
        pfib = fib;
    }
    return fib;
}
export default fibonacci;