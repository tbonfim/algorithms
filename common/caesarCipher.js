/** Caesar Cipher:
 * 
 * substitute each character by shifting it up or down the alphabet by a given integer
 */

const caesarCipher = function(str, offset) {  
    return str.split('').reduce( (cipher, letter) => {
        var isUpperCase = letter === letter.toUpperCase();
        var isAlphabetical = /\w/.test(letter);
        var codedIndex = (letter.toLowerCase().charCodeAt(0) + offset - 97 ) % 26 + 97;
        while (codedIndex < 97 ) codedIndex += 26;
        var codedChar = String.fromCharCode(codedIndex);
        var nextChar = 
            isAlphabetical 
            ? isUpperCase 
                ? codedChar.toUpperCase()
                : codedChar
                    : letter;
        return cipher + nextChar;
    }, '');
}
export default caesarCipher;