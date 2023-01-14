import { fizzbuzz } from '../lib/fizzBuzz'

describe("fizzbuzz", () => {
  test("returns list 100 items", () => {
    const result = fizzbuzz();

    expect(result.length).toBe(100);
  });
  test("list starts at 1 finish 100", () => {
    const result = fizzbuzz();

    expect(result[0]).toBe(1);
    expect(result[result.length - 1]).toBe(100);
  });
  test("returns Fizz when is 3", () => {
    const result = fizzbuzz();

    expect(result[2]).toBe("Fizz");
  });
  test("returns Fizz when is divisible by 3", () => {
    const result = fizzbuzz();

    expect(result[5]).toBe("Fizz");
  });
});

