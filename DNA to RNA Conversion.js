// Code wars Kata8 Solutions

/*
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
*/

/*
  Solution(1)
--------------
    1) Convert string to array
    2) Loop over array and replace any "T" to "U"

  Solution(1)
--------------
    1) Use Regular Expression to convert globally any "T" to "U"
*/

// Solution

function DNAtoRNA(dna) {
  // Solution (1) :
  // dna = Array.from(dna.toUpperCase());
  // const RNA = dna.map(str => str.replace('T', 'U')).join('');
  // return RNA;

  // Solution (2)
  return dna.replace(/T/g, 'U');
}

console.log(DNAtoRNA('UTTT'));
