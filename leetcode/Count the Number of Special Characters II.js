var numberOfSpecialChars = function(word) {
    var res=0

    var mapLower=new Map()
    var mapUpperCount=new Map()
    var mapLowerCount=new Map()
    for(let i=97,j=65;i<97+26;i++,j++){
        mapLower.set(String.fromCharCode(i),String.fromCharCode(j))
        mapUpperCount.set(String.fromCharCode(j),"x")
        mapLowerCount.set(String.fromCharCode(i),"x")        
    }

    for(let i=0;i<word.length;i++){
        if(mapLowerCount.has(word[i])) {
            var v=mapLowerCount.get(word[i])
            mapLowerCount.set(word[i], i)
        }
        else{
            if(mapUpperCount.get(word[i])=="x"){
                mapUpperCount.set(word[i],i);
            }
        }
    }
    for(let i of mapLower.keys()){
        if(mapLowerCount.get(i)<mapUpperCount.get(mapLower.get(i))) res++
    }

    return res;
};
