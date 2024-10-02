function splitStringUsingRegex(inputString) {
    const characters = [];
    const regex = /[\s\S]/gu;

    let match;

    while ((match = regex.exec(inputString)) !== null) {
        characters.push(match[0]);
    }

    return characters;
}

// Example usage
const result = splitStringUsingRegex("Hello, World!");
console.log(result); // Output: ["H", "e", "l", "l", "o", ",", " ", "W", "o", "r", "l", "d", "!"]

export default splitStringUsingRegex;

