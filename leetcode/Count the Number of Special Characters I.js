/**
 * @param {string} word
 * @return {number}
 */

var map=new Map()

for(let i=97,j=65;i<97+26;i++,j++){
    map.set(String.fromCharCode(i),String.fromCharCode(j))
}
var numberOfSpecialChars = function(word) {
var set=new Set(word)
var res=0

for (const value of set) {
    if(set.has(map.get(value))) res++
}

return res

};