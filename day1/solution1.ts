import { readFileSync } from "fs";
import { join } from "path";

const input = readFileSync(join(__dirname, "input.txt"), "utf-8");

export const result = input.split("").reduce((acc, curr) => {
  return acc + (curr === "(" ? 1 : -1);
}, 0);
