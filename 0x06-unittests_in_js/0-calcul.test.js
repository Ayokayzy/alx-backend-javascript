var assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", () => {
  it("should be 1 + 3 = 4", function () {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it("should be 1 + 3.7 = 5", function () {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it("should be 1.2 + 3.7 = 5", function () {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it("should be 1.5 + 3.7 = 6", function () {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
  it("should be -2 + 4 = 2", function () {
    assert.equal(calculateNumber(-2, 4), 2);
  });
  it("should be 2.6 + -4.7 = -2", function () {
    assert.equal(calculateNumber(2.6, -4.7), -2);
  });
  it("should be -2.5 + -7.5 = -9", function () {
    assert.equal(calculateNumber(-2.5, -7.5), -9);
  });
});
