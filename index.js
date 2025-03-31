// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

destructivelyAppendCat = (name) => {
    cats.push(name);
};

destructivelyPrependCat = (name) => {
    cats.unshift(name);
};

destructivelyRemoveLastCat = () => {
    cats.pop();
};
 
destructivelyRemoveFirstCat = () => {
    cats.shift();
};
 
appendCat = (name) => {
    return [...cats, name];
};
 
prependCat = (name) => {
    return [name,...cats]
};
 
removeLastCat = (name) => {
    return cats.slice(0, cats.length - 1);
};
 
removeFirstCat = (name) => {
    return cats.slice(1);
};
 
