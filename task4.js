function reverse(string){
    var rev = " ";
    for(var x=string.length-1; x>0; x--){
        rev += string[x];
    }

    return rev;
}

module.exports.reverse = reverse;