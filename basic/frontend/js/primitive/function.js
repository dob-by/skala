function greet (name) {
    return `greet function: Hello, ${name}!`;   
}

console.log(greet("World")); // "greet function: Hello, World!"

const greetVariable = (name) => {
    return `greet variable: Hello, ${name}!`;
};

console.log(greetVariable("World")); // "greet variable: Hello, World!"