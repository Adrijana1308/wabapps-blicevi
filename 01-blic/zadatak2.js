/*napisi funkciju koja za parametar uzima String, te vraća točno drugu polovicu stringa (zaokruzite na nizu u uslučaju float-a) */

var func2 = function (str){
    
    if(str.length%2==0){
        return str.slice(0, str.length/2)
    }
    return str
}

console.log(func2("Javascript i nije tako loš"))