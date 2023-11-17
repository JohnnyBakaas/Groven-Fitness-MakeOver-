const test = () => {
  const stringen = "paypalishiring";
  const rows = 4;
  const ut = [];
  for (let i = 0; i < rows; i++) {
    ut.push([]);
  }

  let down = true;
  let vertical = 0;
  let horisontal = 0;

  for (let i = 0; i < stringen.length; i++) {
    ut[vertical][horisontal] = stringen[i];

    if (down) {
      vertical++;
    } else {
      horisontal++;
      vertical--;
    }

    if (vertical == rows - 1) {
      down = !down;
    } else if (vertical == 0) {
      down = !down;
    }
  }

  let fakteisUt = "";
  for (let i = 0; i < ut.length; i++) {
    fakteisUt += ut[i].join("");
  }
  return fakteisUt;
};

console.log(test());

/*
0           6           12
1       5   7       11  13
2   4       8   10      14
3           9           15

for (element in numberArray) stringen += input[numberArrayen]
*/
