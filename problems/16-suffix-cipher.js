/*******************************************************************************

 Examples:

 let cipher1 = {
     ly: function(word) {
         return word.slice(0, -1) + 'ee';
        },
        ize: function(word) {
            return word + 'r';
        }
    };
    console.log(suffixCipher('quietly and gently visualize', cipher1));
    // quietlee and gentlee visualizer

    let cipher2 = {
        tal: function(word) {
            return word.toUpperCase();
        },
        s: function(word) {
            return word + 'th';
        }
    };
    console.log(suffixCipher('incremental progress is very instrumental', cipher2));
    // INCREMENTAL progressth isth very INSTRUMENTAL

    Write a function `suffixCipher` that accepts a sentence and object as arguments.
    The object contains suffixes as keys and callbacks as values. The `suffixCipher`
    function should return a new sentence where words of the original sentence are
    modified according to the callback that corresponds with the suffix that the word
    ends with. If the word does not end in any of the suffix keys, then it should not
    be modified. You can assume that only one suffix of the object will match a word.
    *******************************************************************************/

   let suffixCipher = function(sentString, obj) {
    let words = sentString.split(" ");
    let keys = Object.keys(obj);
    let res = words.map(function(word){
        for (let i = 0; i < keys.length; i++){
            let key = keys[i]

            if( word.endsWith(key) ){
                let func = obj[key]
               return func(word)
            }
        }
        return word;
    });

    // for (let i = 0; i < words.length; i++){
    //     let word =words[i];

    //     for (let j = 0; j < keys.length; j++){
    //         let key = keys[j]

    //         if(word.endsWith(key)){
    //             let func = obj[key](word)
    //             res.push(func(word))
    //             break;
    //         }else{
    //             res.push(word)
    //             break;
    //         }
    //     }
    // }


    return res.join(" ");
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = suffixCipher;
