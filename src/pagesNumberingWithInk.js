function solution(current, numberOfDigits) {
    let digits = numberOfDigits;
    let pages = current;
    while (digits >= pages.toString().length) {
        digits -= pages.toString().length;
        pages++;
    }
    return pages - 1;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test pagesNumberingWithInk

// alternative solution
