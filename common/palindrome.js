/** Palindrome:
 * 
 * Given a string, returns if its palindrome or not
 */

var palindrome = function(str){
    return str.length < 2 ? true : str[0] !== str[str.length-1] ? false : palindrome(str.slice(1, -1));
}
export default palindromel;