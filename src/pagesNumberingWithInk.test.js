const solution = require('./pagesNumberingWithInk.js');

test('test 1', () => {
    expect(solution(1, 5)).toBe(5);
});

test('test 2', () => {
    expect(solution(21, 5)).toBe(22);
});

test('test 3', () => {
    expect(solution(8, 4)).toBe(10);
});

test('test 4', () => {
    expect(solution(21, 6)).toBe(23);
});

test('test 5', () => {
    expect(solution(10, 3)).toBe(10);
});

test('test 6', () => {
    expect(solution(76, 250)).toBe(166);
});

test('test 7', () => {
    expect(solution(80, 1000)).toBe(419);
});
