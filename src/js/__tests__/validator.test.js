import { Validator } from "../app";
const validator = new Validator();

test("validator true", () => {
  const result = validator.validateUsername("L-oz_i123ck");
  const expected = true;
  expect(result).toBe(expected);
});
test("validator start", () => {
  const result = validator.validateUsername("5L-o-z_i123ck");
  const expected = false;
  expect(result).toBe(expected);
});
test("validator end", () => {
  const result = validator.validateUsername("L-o-z_i123ck-");
  const expected = false;
  expect(result).toBe(expected);
});
test("validator numbers > 3", () => {
  const result = validator.validateUsername("L-o-z_1234ck");
  const expected = false;
  expect(result).toBe(expected);
});
