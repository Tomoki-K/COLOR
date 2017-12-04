// common functions

// generates a random color object
export function generateColor() {
    let color = {
        hex: null,
        r: Math.round(Math.random() * 256),
        g: Math.round(Math.random() * 256),
        b: Math.round(Math.random() * 256)
    };
    // re-generate color if color is too dark or bright
    const sum = color.r + color.g + color.b;
    if ( sum < 100 || sum > 700 ) {
        generateColor();
    }
    color.hex = toPaddedHex(color.r) + toPaddedHex(color.g) + toPaddedHex(color.b);
    return color;
}
function toPaddedHex(digit){
    let hex = digit.toString(16).toUpperCase();
    return hex.length == 1 ? '0' + hex : hex;
}

// randomize array order
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

// conditional rendering
export function If(props) {
    if (props.condition) {
        return props.children;
    } else {
        return false;
    }
}
