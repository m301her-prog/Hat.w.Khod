import React from 'react';

const Home = () => {
  const coaches = [
    { id: 1, name: "أحمد علي", skill: "برمجة React", rate: "20 دقيقة" },
    { id: 2, name: "سارة محمد", skill: "تصميم UI/UX", rate: "30 دقيقة" },
    { id: 3, name: "خالد حسن", skill: "لغة إنجليزية", rate: "15 دقيقة" },
  ];

  return (
    <div style={{ padding: '20px', textAlign: 'right', direction: 'rtl' }}>
      <h2>اكتشف المهارات 💡</h2>
      <p>اختر مدرباً لتبدأ تبادل الخبرات:</p>
      
      {coaches.map(coach => (
        <div key={coach.id} style={cardStyle}>
          <h3>{coach.name}</h3>
          <p>المهارة: {coach.skill}</p>
          <p>التكلفة: {coach.rate}</p>
          <button style={btnStyle}>طلب تدريب الآن</button>
        </div>
      ))}
    </div>
  );
};

const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '12px',
  padding: '15px',
  marginBottom: '15px',
  backgroundColor: '#f9f9f9',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
};

const btnStyle = {
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '8px',
  cursor: 'pointer'
};

export default Home;
