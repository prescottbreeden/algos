function solve(a, b) {
    let c = [0,0];
    for(let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            c[0] += 1;
        }
        else if (a[i] < b[i]) {
            c[1] += 1;
        } else {
          continue;
        }
    }
    return c;

}