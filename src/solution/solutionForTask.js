function sequence(n, x) {
    var arr = [];
    arr.push(x);
    while(arr.length < n) {
        arr.push(arr[arr.length-1]*2+2);
    }
    return arr;
}

export default sequence;
