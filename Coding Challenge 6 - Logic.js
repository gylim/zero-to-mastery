// Problem #1
const arr = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

const sorted = arr.sort((a, b) => a - b);
let first = sorted[0];
let empty = [];
let answer = [];
for (i=0; i<sorted.length; i++) {
    if (first === sorted[i]) {
        empty.push(sorted[i]);
    } else {
        first = sorted[i];
        if (empty.length !== 0) {
            answer.push(empty);
            empty = [];
        } 
        if (sorted[i] !== sorted[i+1]) {
            answer.push(sorted[i]);
        } else if (sorted[i] === sorted[i+1]) {
            empty.push(sorted[i]);
        }
    }
}

// Problem #2
const findSum = (arr, num) => {
    let right = arr.length - 1;
    let left = 0;
    arr.sort((a, b) => a - b);
    while (left < right ) {
        if (arr[left] + arr[right] === num) 
            return [arr[left], arr[right]];
        else if (arr[left] + arr[right] > num) 
            right--;
        else
            left++;
    }
    return "There is no sum"
}
// findSum([0, -1, 2, -3, 1], -2)
// findSum([1, -2, 1, 0, 5], 0)

// Problem #3
const colordict = {
    0:"0", 1:"1", 2:"2", 3:"3", 4:"4",
    5:"5", 6:"6", 7:"7", 8:"8", 9:"9",
    10:"a", 11:"b", 12:"c", 13:"d", 14:"e",
    15:"f",
}

const HEXtoRGB = (code) => {
    let working = code.toLowerCase();
    if (working[0] === "#")
        working = working.slice(-6);
    const red = parseInt(working.slice(0,2), 16);
    const green = parseInt(working.slice(2,4), 16);
    const blue = parseInt(working.slice(4,6), 16);
    return `(${red}, ${green}, ${blue})`
}

const RGBtoHEX = (rgb) => {
    let work = rgb.slice(1, -1)
    const [red, green, blue] = work.split(', ');
    const redhex = colordict[Math.floor(red/16)]+colordict[red%16];
    const greenhex = colordict[Math.floor(green/16)]+colordict[green%16];
    const bluehex = colordict[Math.floor(blue/16)]+colordict[blue%16];
    return "#"+redhex+greenhex+bluehex
}

const converter = (colorcode) => {
    if (colorcode.includes(","))
        return RGBtoHEX(colorcode);
    else
        return HEXtoRGB(colorcode);
}