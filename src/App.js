import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TempComp from './TempComp';

//hisam i found this quotes api snippet of code online that was relatively easy to use and understand so i just styled it myself, removed the twitter function and i wrote comments under the code so you know that i kinda understand whats going on 

//ref: https://github.com/kritika27/quotes-generator-react/blob/master/src/App.js


// random quote generator
const url = "https://api.quotable.io/random";

// use state, quote is the data
  const App = () => {
  const [quotes, setQuotes] = useState([]);

  // function getting the quote using fetch similar to how you showed in class except the url is a const defined above instead
  const getQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setQuotes(data));
  };

  //runs the api within the getQuote function with useEffect
  useEffect(() => {
    getQuote();
  }, []);

  //new Quote when button is pressed which is seen under <button onClick={getNewQuote}
  const getNewQuote = () => {
    getQuote();
  };
  
  // the content will be inputted into the <p> underneath and that will be the quote, and then the author will pull the authors name under h5
  const { content, author } = quotes;

  return (
    <div className="main">
      <h1>Inspiring Quotes, brought to you by Tanya Khatcherian's React App</h1>
      <TempComp/>
    <div className="box-centerside">
      <div className="text">
        <p>{content}</p>
      </div>
      <div className="author">
        <h5>{author}</h5>
        <div className="button-container">
          <Button onClick={getNewQuote}>New Quote</Button>
        </div>
      </div>
    </div>
    <h1>Hope you have a wonderful day!</h1>
    </div>
  );
};

export default App;
