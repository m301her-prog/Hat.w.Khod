import React, { useState, useEffect } from 'react';

const Session = () => {
  const [seconds, setSeconds] = useState(1200); // 20 دقيقة كبداية

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (s) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h2>جاري التدريب الآن ⏱️</h2>
      <div style={timerCircle}>
        {formatTime(seconds)}
      </div>
      <p>يتم الآن تبادل الخبرة مع "أحمد علي"</p>
      
      <button style={{ ...btnStyle, backgroundColor: '#dc3545' }}>إنهاء الجلسة</button>
    </div>
  );
};

const timerCircle = {
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  border: '8px solid #007bff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '40px',
  margin: '20px auto',
  fontWeight: 'bold'
};

const btnStyle = {
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  padding: '15px 30px',
  borderRadius: '10px',
  fontSize: '18px'
};

export default Session;
