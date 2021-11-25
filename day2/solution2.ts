import { readFileSync } from "fs";
import { join } from "path";

const input = readFileSync(join(__dirname, "input.txt"), "utf8");

const boxLengths = input.split("\n").map((line) => {
  const dimensions = line.split("x").map(Number);
  const bow = dimensions.reduce((curr, acc) => curr * acc, 1);

  const smallestSides = dimensions.sort((a, b) => a - b).slice(0, 2);

  return smallestSides[0] * 2 + smallestSides[1] * 2 + bow;
});

export const result = boxLengths.reduce((curr, acc) => curr + acc, 0);
