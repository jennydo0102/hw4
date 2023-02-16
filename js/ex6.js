function countVowels(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    let count = 0;
    for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i].toLowerCase())) {
        count++;
      }
    }
    return count;
  }
  
  function isPalindrome(word) {
    word = word.toLowerCase();
    for (let i = 0; i < Math.floor(word.length / 2); i++) {
      if (word[i] !== word[word.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  let input = prompt("Enter a word:");
  let numVowels = countVowels(input);
  let palindrome = isPalindrome(input);
  
  console.log(`${input} contains ${numVowels} vowels and is ${palindrome ? 'a' : 'not a'} palindrome.`);