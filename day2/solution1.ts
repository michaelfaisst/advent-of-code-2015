import { readFileSync } from "fs";
import { join } from "path";

interface IBox {
  length: number;
  width: number;
  height: number;
  totalArea: number;
  smallestArea: number;
}

const input = readFileSync(join(__dirname, "input.txt"), "utf8");

const transformInput = (input: string): IBox[] => {
  return input.split("\n").map((line) => {
    const [length, width, height] = line.split("x").map(Number);

    const totalArea = 2 * (length * width + width * height + height * length);
    const smallestArea = Math.min(
      length * width,
      width * height,
      height * length
    );

    return { length, width, height, totalArea, smallestArea };
  });
};

const boxes = transformInput(input);

export const result = boxes.reduce((acc, box) => {
  return acc + box.totalArea + box.smallestArea;
}, 0);
