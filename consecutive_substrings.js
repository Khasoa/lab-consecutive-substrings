function consecutiveSubstrings(string) {
  // Array to store all substrings
  const result = [];

  //Outer loop controls the starting index
  for (let i = 0; i < string.length; i++) {
    //Inner loop controls the ending index
    for (let j = i; j < string.length; j++) {
      //Extract consecutive substring from index i to j
      result.push(string.slice(i, j + 1));
    }
  }
  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;


