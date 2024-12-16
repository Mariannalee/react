import React, { useState } from 'react';

const GuessNumber = () => {
  // 預設隨機生成一個數字在 1 到 50 之間
  const secretNumber = Math.floor(Math.random() * 50) + 1;
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);

  // 處理用戶輸入的數字
  const handleChange = (e) => {
    setGuess(e.target.value);
  };

  // 檢查猜測的數字
  const checkGuess = () => {
    // 確保輸入的是正整數
    const numGuess = parseInt(guess, 10);

    // 檢查是否為有效的正整數
    if (isNaN(numGuess) || numGuess <= 0) {
      setMessage('請輸入一個有效的正整數！');
      return;
    }

    setAttempts(attempts + 1);

    if (numGuess === secretNumber) {
      setMessage(`猜對了！答案是 ${secretNumber}，你總共猜了 ${attempts + 1} 次。`);
    } else if (numGuess > secretNumber) {
      setMessage('再低一點！');
    } else if (numGuess < secretNumber) {
      setMessage('再高一點！');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>猜數字遊戲</h1>
      <p>我想到了一個 1 到 50 之間的數字，試著猜猜看！</p>
      <input
        type="number"
        value={guess}
        onChange={handleChange}
        placeholder="輸入一個正整數"
        style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
      />
      <br />
      <button
        onClick={checkGuess}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        猜一下
      </button>
      <p style={{ fontSize: '18px', marginTop: '20px', color: 'blue' }}>
        {message}
      </p>
    </div>
  );
};

export default GuessNumber;
