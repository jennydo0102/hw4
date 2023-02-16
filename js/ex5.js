const words = [];

while (true) {
  const input = prompt("Enter a word (type 'stop' to exit):");
  
  if (input.toLowerCase() === "stop") {
    if (words.length === 0) {
      console.log("No words to display, Stop was the first word entered.");
    } else {
      console.log("You entered the following words:");
      for (const word of words) {
        console.log(word);
      }
    }
    break;
  } else {
    words.push(input);
  }
}