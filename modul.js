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
    let html = "";
    for (let i=0; i<10; i++) html += "*";
    console.log("Eszter: " + html);
}
