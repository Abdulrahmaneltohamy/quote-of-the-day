var displayQuote = [
  {
    quoteOutput:
      '"Resentment is like drinking poison and waiting for your enemies to die. "',
    quoteAuthor: '"--Nelson Mandela"',
  },
  {
    quoteOutput: '"Be yourself; everyone else is already taken."',
    quoteAuthor: '"--Oscar Wilde"',
  },
  {
    quoteOutput: '"So many books, so little time."',
    quoteAuthor: '"--Frank Zappa"',
  },
  {
    quoteOutput: '"A room without books is like a body without a soul."',
    quoteAuthor: '"--Marcus Tullius Cicero"',
  },
  {
    quoteOutput:
      '"You only live once, but if you do it right, once is enough."',
    quoteAuthor: '"--Mae West"',
  },
  {
    quoteOutput: '"Be the change that you wish to see in the world."',
    quoteAuthor: '"--Mahatma Gandhi"',
  },
  {
    quoteOutput:
      '"A friend is someone who knows all about you and still loves you."',
    quoteAuthor: '"--Elbert Hubbard"',
  },
  {
    quoteOutput:
      '"Live as if you were to die tomorrow. Learn as if you were to live forever."',
    quoteAuthor: '"--Mahatma Gandhi"',
  },
];

var lastNum;
function generateQuote() {
  do {
    var generateNum = Math.floor(Math.random() * displayQuote.length);
  } while (lastNum == generateNum);

  lastNum = generateNum;
  document.getElementById("quoteOutput").innerHTML =
    displayQuote[generateNum].quoteOutput;
  document.getElementById("quoteAuthor").innerHTML =
    displayQuote[generateNum].quoteAuthor;
}
