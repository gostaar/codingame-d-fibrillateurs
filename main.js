const LON = parseFloat(readline().replace(/,/gi, '.'));
const LAT = parseFloat(readline().replace(/,/gi, '.'));
const N = parseInt(readline());

let distance = "";
let temp = 0 ;
let index = "";

for (let i = 0; i < N; i++) {
    const DEFIB = readline();
    let tab = DEFIB.replace(/,/gi, '.').split(";");
    let LONB = parseFloat(tab[4]);
    let LATB = parseFloat(tab[5]);
    
    if (LONB === LON && LATB === LAT) {
        index = tab[1];
    } else {
        distance = Math.sqrt( Math.pow((LONB - LON) * Math.cos((LAT + LATB)/2), 2) + Math.pow((LATB - LAT), 2)) * 6371;
        if (temp === 0){temp = distance; index = tab[1]; } else if (temp > distance) {temp = distance; index = tab[1];};
    };
};

console.log(index);
