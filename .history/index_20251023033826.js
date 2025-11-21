// return masked string
function maskify(cc) {
    var length = cc.length ;
    var mask = cc.replace(length - 4)
    return mask ;
}
