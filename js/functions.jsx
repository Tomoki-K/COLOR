// common functions

export function getColorAttr(hex, attr){
    var value;
    switch (attr) {
        case 'r': value = hex.substring(0, 2); break;
        case 'g': value = hex.substring(2, 4); break;
        case 'b': value = hex.substring(4, 6); break;
    }
    return parseInt(value, 16);
}
