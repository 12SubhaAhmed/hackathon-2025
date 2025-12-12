import React, { useState, useEffect, useRef, JSX} from 'react';
import styles from './styles.module.css'; 

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

export default function Chatbot(): JSX.Element {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const API_ENDPOINT =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:8000/ask'
      : '/api/ask';

  const handleSendMessage = async () => {
    if (input.trim() === '' || isLoading) return; 

    const userMessage: Message = { id: Date.now(), text: input, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');
    setIsLoading(true); 

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: userMessage.text }), 
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const botAnswer = data.answer || "I don't know"; 

      const botMessage: Message = { id: Date.now() + 1, text: botAnswer, sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error fetching from API:', error);
      const errorMessage: Message = { id: Date.now() + 1, text: 'Oops! Something went wrong. Please try again later.', sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false); // End loading
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className={styles.chatbotContainer}>
      <div className={styles.messagesContainer} ref={messagesContainerRef}>
        {messages.map((message) => (
          <div key={message.id} className={`${styles.message} ${styles[message.sender]}`}>
            {message.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
        {isLoading && (
          <div className={styles.thinkingMessage}>
            <div className={styles.thinkingDot} />
            <div className={styles.thinkingDot} />
            <div className={styles.thinkingDot} />
          </div>
        )}
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          className={styles.inputField}
          placeholder="Ask me anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className={styles.sendButton} onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}
