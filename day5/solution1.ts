import { readFileSync } from "fs";
import { join } from "path";

const vowels = ["a", "e", "i", "o", "u"];
const forbiddenStrings = ["ab", "cd", "pq", "xy"];

const isNiceString = (input: string) => {
  const inputChars = input.split("");

  const hasThreeVowels =
    inputChars.filter((x) => vowels.includes(x)).length >= 3;

  const hasConsecutiveChars = inputChars.some(
    (char, i, arr) => i + 1 < arr.length && char === arr[i + 1]
  );

  const hasForbiddenString = forbiddenStrings.some((forbidden) =>
    input.includes(forbidden)
  );

  return hasThreeVowels && hasConsecutiveChars && !hasForbiddenString;
};

const input = readFileSync(join(__dirname, "input.txt"), "utf-8");

export const result = input
  .split("\n")
  .map(isNiceString)
  .filter((x) => x).length;
