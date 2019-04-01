(function(){
    /** Vowels:
     * 
     * Given a string, count the number of vowels on it
     */
   
    var vowelsCounter = function(str){
        var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
        var count = 0;
        for (var i = 0; i < str.length; i++ ) {
            count += vowels.includes(str[i]) ? 1: 0;
        }
        return count;
    }
})();