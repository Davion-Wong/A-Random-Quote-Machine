import './App.css';
import React, { useState, useEffect } from 'react';
import QuoteBox from './components/QuoteBox';

function App() {

  const quotes = [
    {text: "The only way to do great work is to love what you do.", author: "Steve Jobs"},
    {text: "The power of imagination makes us infinite.", author: "John Muir"},
    {text: "Don't count the days, make the days count.", author: "Muhammad Ali"},
    {text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt"},
    {text: "Change your thoughts and you change your world.", author: "Norman Vincent Peale"},
    {text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius"},
    {text: "Without hard work, nothing grows but weeds.", author: "Gordon B. Hinckley"},
    {text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt"},
    {text: "If you can dream it, you can do it.", author: "Walt Disney"},
    {text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt"},
    {text: "In order to succeed, we must first believe that we can.", author: "Nikos Kazantzakis"},
    {text: "Failure will never overtake me if my determination to succeed is strong enough.", author: "Og Mandino"},
    {text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll"},
    {text: "The mind is everything. What you think you become.", author: "Buddha"},
    {text: "The best way to predict the future is to create it.", author: "Abraham Lincoln"},
    {text: "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.", author: "Norman Vincent Peale"},
    {text: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.", author: "Thomas A. Edison"},
    {text: "Even if you fall on your face, you're still moving forward.", author: "Victor Kiam"},
    {text: "What you do today can improve all your tomorrows.", author: "Ralph Marston"},
    {text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe"},
    {text: "Believe that life is worth living and your belief will help create the fact.", author: "William James"},
    {text: "Do not wait to strike till the iron is hot; but make it hot by striking.", author: "William Butler Yeats"},
    {text: "You just can't beat the person who never gives up.", author: "Babe Ruth"},
    {text: "Problems are not stop signs, they are guidelines.", author: "Robert H. Schuller"},
    {text: "It always seems impossible until it's done.", author: "Nelson Mandela"},
    {text: "Setting goals is the first step in turning the invisible into the visible.", author: "Tony Robbins"},
    {text: "You can't cross the sea merely by standing and staring at the water.", author: "Rabindranath Tagore"},
    {text: "A creative man is motivated by the desire to achieve, not by the desire to beat others.", author: "Ayn Rand"},
    {text: "Either I will find a way, or I will make one.", author: "Philip Sidney"},
    {text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson"}
  ];
  const [quote, setQuote] = useState({text: '', author: ''});

  const [colorIndex, setColorIndex] = useState(0);

  const colors = [
    'rgb(220, 214, 247)',
    'rgb(255, 60, 199)',
    'rgb(240, 246, 0)',
    'rgb(0, 229, 232)',
    'rgb(64, 121, 140)'
  ];

  
  const getRandomQuote = () => {
    // code here to fetch a random quote and set it to the state
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
    setColorIndex((colorIndex + 1) % colors.length);
  };

  // Call getRandomQuote when the component mounts
  useEffect(() => { 
    getRandomQuote();
  }, []); // Pass an empty dependency array so it only runs on mount

  // Call getRandomQuote when the component mounts
  useEffect(() => { 
    document.body.style.backgroundColor = colors[colorIndex];
  }, [colors, colorIndex]); // Pass an empty dependency array so it only runs on mount

  return (
    <div className="App">
      <QuoteBox quote={quote.text} author={quote.author} getRandomQuote={getRandomQuote} />
    </div>
  );
}

export default App;
