import { readFileSync } from "fs";
import { join } from "path";

const isRule1Valid = (inputChars: string[]) => {
  for (let i = 0; i < inputChars.length - 3; i++) {
    for (let j = i + 2; j < inputChars.length - 1; j++) {
      if (
        inputChars[i] === inputChars[j] &&
        inputChars[i + 1] === inputChars[j + 1]
      ) {
        return true;
      }
    }
  }

  return false;
};

const isRule2Valid = (inputChars: string[]) => {
  return inputChars.some(
    (char, i) =>
      i < inputChars.length - 2 &&
      inputChars[i] === char &&
      inputChars[i + 2] === char
  );
};

const isNiceString = (input: string) => {
  const inputChars = input.split("");

  const rule1Valid = isRule1Valid(inputChars);
  const rule2Valid = isRule2Valid(inputChars);

  return rule1Valid && rule2Valid;
};

const input = readFileSync(join(__dirname, "input.txt"), "utf-8");

export const result = input
  .split("\n")
  .map(isNiceString)
  .filter((x) => x).length;
