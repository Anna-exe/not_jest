const addition = require("../tests/calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(22, 20)).toBe(42);
        })
    });
    describe("Subtraction function", () => {
        
    });
    describe("Multiply function", () => {
        
    });
    describe("Division function", () => {
        
    });
});