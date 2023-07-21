import React from 'react';

function QuoteBox({ quote="I would rather die of passion than of boredom.", author="Vincent van Gogh", getRandomQuote=null }) {
  return (
    <div id="quote-box">
      <div id="quoteContent">
        <p id="text">{quote}</p>
        <p id="author">- {author}</p>
      </div>      
      <div>
        <button id="another-quote" onClick={getRandomQuote}>Another Quote</button>
      </div>
      <div>
        <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`} target="_blank"  rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
      </div>      
    </div>
  );
}

export default QuoteBox;
