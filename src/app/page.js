'use client';

import { useState } from 'react';
import styles from './page.module.css';

const quotes = [
  "Life is what happens when you're busy making other plans. - John Lennon",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill"
];

export default function Home() {
  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Random Quote Generator</h1>
        <p className={styles.quote}>{quote}</p>
        <button className={styles.button} onClick={getRandomQuote}>
          Get New Quote
        </button>
      </main>
    </div>
  );
}
