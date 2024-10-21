'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

const quotes = [
  "Life is what happens when you're busy making other plans. - John Lennon",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
  "Be the change you wish to see in the world. - Mahatma Gandhi",
  "I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison",
  "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference. - Robert Frost",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
  "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. - Mark Twain",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Spread love everywhere you go. Let no one ever come to you without leaving happier. - Mother Teresa",
  
  "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world. - Albert Einstein",
  "The only impossible journey is the one you never begin. - Tony Robbins",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "I attribute my success to this: I never gave or took any excuse. - Florence Nightingale",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  "The most difficult thing is the decision to act, the rest is merely tenacity. - Amelia Earhart",
  "Every strike brings me closer to the next home run. - Babe Ruth",
  "We become what we think about. - Earl Nightingale",
  "Life is 10% what happens to me and 90% of how I react to it. - Charles Swindoll",
  "The mind is everything. What you think you become. - Buddha",
  "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
  "An unexamined life is not worth living. - Socrates",
  "Eighty percent of success is showing up. - Woody Allen",
  "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
  "Winning isn't everything, but wanting to win is. - Vince Lombardi"
  
];

export default function Home() {
  const [quote, setQuote] = useState(quotes[0]);
  const [key, setKey] = useState(0);

  const getRandomQuote = () => {
    let newQuote;
    do {
      newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (newQuote === quote);
    setQuote(newQuote);
    setKey(prevKey => prevKey + 1);
  };

  // to get a random quote
  useEffect(() => {
    getRandomQuote();
  }, []);

  //final div
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Random Quote Generator</h1>
        <p key={key} className={styles.quote}>{quote}</p>
        <button className={styles.button} onClick={getRandomQuote}>
          Get New Quote
        </button>
      </main>
    </div>
  );
  
}
