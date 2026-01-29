export function osszeg(tomb) {
    let e = 0;
    for (let x of tomb) e += x;
    return e;
}

export function hamis() {
    return false;
}

export function igaz() {
    return true;
}

export function eszter() {
    console.log("Eszter");
}
