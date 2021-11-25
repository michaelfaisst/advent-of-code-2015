import { readFileSync } from "fs";
import { join } from "path";

interface IPosition {
  x: number;
  y: number;
}

const move = (direction: string, position: IPosition) => {
  switch (direction) {
    case "^":
      position.y++;
      break;
    case ">":
      position.x++;
      break;
    case "v":
      position.y--;
      break;
    case "<":
      position.x--;
      break;
  }
};

const input = readFileSync(join(__dirname, "input.txt"), "utf8");

let santaPosition = { x: 0, y: 0 };
let roboPosition = { x: 0, y: 0 };
const visitedHouses = ["0x0"];

input.split("").forEach((direction, index) => {
  const position = index % 2 === 0 ? santaPosition : roboPosition;
  move(direction, position);

  const visitedString = `${position.x}x${position.y}`;

  if (!visitedHouses.includes(visitedString)) {
    visitedHouses.push(visitedString);
  }
});

export const result = visitedHouses.length;
