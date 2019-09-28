import { utils } from '../src/scripts/utils.esm';

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});

describe("Another suite", function() {
  it('Adds 4 + 5 to equal 9', function() {
    expect(utils.add(4, 5)).toBe(9); // Passes
    // expect(utils.add(4, 5)).toBe(10); // Fails
  });
});
