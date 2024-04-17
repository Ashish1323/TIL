/**
 * @param {string} s
 * @return {string}
 */
var findLatestTime = function(s) {
    var k=s.split("");
    if(k[0]=="?" && k[1]=="?") k[1]="1", k[0]="1"
    if(k[0]=="0" && k[1]=="?") k[1]="9"
    if(k[0]=="1" && k[1]=="?") k[1]="1"
    if(k[0]=="?" && (k[1]=="1" || k[1]=="0")) k[0]="1"
    if(k[0]=="?") k[0]="0" 

    if(k[3]=="?" && k[4]=="?") k[3]="5", k[4]="9"
    if(k[3]=="?") k[3]="5"
    if(k[4]=="?") k[4]="9"


    return k.join("")
};