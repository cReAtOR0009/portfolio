import React, { useState, useEffect } from 'react';

const TypingEffect = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (isTyping) {
      if (charIndex < words[currentWordIndex].word.length) {
        const typingTimeout = setTimeout(() => {
          setDisplayedText(displayedText + words[currentWordIndex].word[charIndex]);
          setCharIndex(charIndex + 1);
        }, 100); // Adjust typing speed here

        return () => clearTimeout(typingTimeout);
      } else {
        const delayTimeout = setTimeout(() => {
          setIsTyping(false);
        }, words[currentWordIndex].delay);

        return () => clearTimeout(delayTimeout);
      }
    } else {
      if (charIndex > 0) {
        const clearingTimeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
          setCharIndex(charIndex - 1);
        }, 50); // Adjust clearing speed here

        return () => clearTimeout(clearingTimeout);
      } else {
        const nextWordTimeout = setTimeout(() => {
          setCurrentWordIndex((currentWordIndex + 1) % words.length);
          setIsTyping(true);
        }, 500); // Pause before typing the next word

        return () => clearTimeout(nextWordTimeout);
      }
    }
  }, [charIndex, isTyping, words, currentWordIndex, displayedText]);

  return (
    <span className="typing-effect">
      {displayedText}
    </span>
  );
};

export default TypingEffect;
