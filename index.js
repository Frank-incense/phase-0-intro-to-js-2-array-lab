// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

// Solutions to testcases
function destructivelyAppendCat(name) {
    return cats.push(name);
}
function destructivelyPrependCat(name) {
    return cats.unshift(name);
}
function destructivelyRemoveLastCat(name) {
    return cats.pop();
}
function destructivelyRemoveFirstCat(name) {
    return cats.shift();
}
function appendCat(name) {
    const moreCats = [...cats, name];
    return moreCats;
}
function prependCat(name) {
    const moreCats = [name, ...cats];
    return moreCats;
}
function removeFirstCat() {
    return cats.slice(1);
}
function removeLastCat() {
    return cats.slice(0, -1);
}