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
  "It is during our darkest moments that we must focus to see the light. - Aristotle"
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

  useEffect(() => {
    getRandomQuote();
  }, []);

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
