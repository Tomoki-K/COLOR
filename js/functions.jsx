// common functions

export function generateColor() {
    let color = {
        hex: null,
        r: Math.round(Math.random() * 256),
        g: Math.round(Math.random() * 256),
        b: Math.round(Math.random() * 256)
    };
    color.hex = toPaddedHex(color.r) + toPaddedHex(color.g) + toPaddedHex(color.b);
    return color;
}

function toPaddedHex(digit){
    let hex = digit.toString(16).toUpperCase();
    return hex.length == 1 ? '0' + hex : hex;
}

export function shuffle(arr) {
    let n = arr.length, t, i;
    while (n) {
        i = Math.floor(Math.random() * n--);
        t = arr[n];
        arr[n] = arr[i];
        arr[i] = t;
    }

    return arr;
}
