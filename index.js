// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Shh... Whispering Function</h1>`;

/**
 * Write a function `whisper` that takes in a sentence and returns  a new sentence in all lowercase letters with "shh..." at the beginning.
 *
 * The function should also remove an exclamation point at the end of the sentence, if there is one.
 *
 * Example:
 * input: "The KITTENS are SLEEPING!"
 * output: "shh... the kittens are sleeping"
 *
 * Hint: endsWith and slice
 */

function whisper(sentence) {
  if (sentence.endsWith('!')) {
    sentence = sentence.slice(0, sentence.length - 1);
  }
  sentence = 'shh... ' + sentence.toLowerCase();
  return sentence;
}

console.log(whisper('PLEASE STOP SHOUTING.'));
console.log(whisper("MA'AM, this is a Wendy's!"));
