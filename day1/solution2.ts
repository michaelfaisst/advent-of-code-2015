import { readFileSync } from "fs";
import { join } from "path";

const input = readFileSync(join(__dirname, "input.txt"), "utf-8");

let floor = 0;
let result: number | undefined = undefined;

for (const [i, char] of input.split("").entries()) {
  floor += char === "(" ? 1 : -1;

  if (floor < 0) {
    result = i + 1;
    break;
  }
}

export { result };
