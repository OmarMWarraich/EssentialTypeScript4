export function sum(...vals) {
    return vals.reduce((total, val) => total += val, 0);
}
