// return masked string
function maskify(cc) {
    var length = cc.length ;
    var mask = cc.forEa((e) => e.replace(e[length - 4] , "#") )
    return mask ;
}
