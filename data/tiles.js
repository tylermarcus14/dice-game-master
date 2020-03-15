const die1 = ['L','L','Y','M','B','M'];
const die2 = ['U','U','O','A','I','E'];
const die3 = ['P','T','H','H','W','T'];
const die4 = ['A','I','U','E','O','U'];
const die5 = ['F','P','K','P','G','V'];
const die6 = ['K','B','S','X','N','Z'];
const die7 = ['G','R','G','L','D','R'];
const die8 = ['T','S','C','M','T','C'];
const die9 = ['I','O','Y','I','N','N'];
const die10 = ['L','W','F','L','R','D'];
const die11 = ['R','N','R','H','H','N'];
const die12 = ['T','B','C','C','J','D'];
const dye = [die1,die2,die3,die4,die5,die6,die7,die8,die9,die10,die11,die12];

const letters = [];
// var pt1 = '<div class="tile" data-letter={'
// var pt2 = '}></div>'
for (let i = 0; i < dye.length; i++) {
 var letter = dye[i][Math.floor(Math.random() * dye[i].length)];
//  var together = pt1+letter+pt2
  letters.push(letter)
}


const tiles = [
  { id: 1, letter: letters[0], x: 2, y: 8 },
  { id: 2, letter: letters[1], x: 3, y: 8 },
  { id: 3, letter: letters[2], x: 4, y: 8 },
  { id: 4, letter: letters[3], x: 5, y: 8 },
  { id: 5, letter: letters[4], x: 6, y: 8 },
  { id: 6, letter: letters[5], x: 7, y: 8 },
  { id: 7, letter: letters[6], x: 2, y: 9 },
  { id: 8, letter: letters[7], x: 3, y: 9 },
  { id: 9, letter: letters[8], x: 4, y: 9 },
  { id: 10, letter: letters[9], x: 5, y: 9 },
  { id: 11, letter: letters[10], x: 6, y: 9 },
  { id: 12, letter: letters[11], x: 7, y: 9 }
];

export default tiles;
