import md5 from "md5";

const input = "yzbqklnj";
let index = 0;

while (true) {
  const hash = md5(`${input}${index}`);

  if (hash.startsWith("000000")) break;

  index++;
}

export { index as result };
