export const getPostfix = (value, word) => {
    const n = value % 10;
    if (value > 10 && value < 20) {
        return word === 'pieces' ? 'порций' : 'мышей';
    }
    if (n > 1 && n < 5) {
        return word === 'pieces' ? 'порции' : 'мыши';
    }
    if (n === 1) {
        return word === 'pieces' ? 'порция' : 'мышь';
    }
    return word === 'pieces' ? 'порций' : 'мышей';
}