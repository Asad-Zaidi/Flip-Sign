function toggleSign(value) {
    if (typeof value !== 'number') {
        throw new Error('Input must be a number');
    }
    return -value;
}

console.log(toggleSign(-8));