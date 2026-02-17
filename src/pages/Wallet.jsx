import React from 'react';
// استيراد الدالة التي تربطنا بالبنك المركزي
import { useTime } from '../context/TimeContext'; 

const Wallet = () => {
  // استخدام البيانات الحقيقية من الـ Context
  const { balance, history } = useTime(); 

  return (
    <div style={{ padding: '20px', textAlign: 'center', direction: 'rtl' }}>
      {/* بطاقة الرصيد العلوي */}
      <div style={balanceCard}>
        <h3 style={{ margin: '0 0 10px 0', fontWeight: 'normal' }}>رصيدك الحالي</h3>
        <h1 style={{ fontSize: '48px', color: '#ff9800', margin: 0 }}>
          {balance} 
          <span style={{ fontSize: '18px', marginRight: '8px' }}>دقيقة</span>
        </h1>
      </div>

      {/* سجل النشاطات */}
      <div style={{ textAlign: 'right', marginTop: '30px' }}>
        <h3 style={{ borderBottom: '2px solid #ff9800', display: 'inline-block', paddingBottom: '5px' }}>
          سجل النشاطات 📜
        </h3>
        
        {history.length > 0 ? (
          history.map(item => (
            <div key={item.id} style={historyItem}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: 'bold' }}>{item.title}</span>
                <span style={{ fontSize: '12px', color: '#888' }}>{new Date(item.id).toLocaleDateString('ar-EG')}</span>
              </div>
              <span style={{ 
                fontWeight: 'bold', 
                direction: 'ltr',
                color: item.type === 'gain' ? '#4caf50' : '#f44336' 
              }}>
                {item.amount > 0 ? `+${item.amount}` : item.amount} د
              </span>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', color: '#888', marginTop: '20px' }}>لا توجد عمليات مسجلة بعد.</p>
        )}
      </div>
    </div>
  );
};

// التنسيقات (Styles)
const balanceCard = {
  background: 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)',
  color: 'white',
  padding: '40px 20px',
  borderRadius: '25px',
  boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
  marginTop: '10px'
};

const historyItem = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '15px 10px',
  borderBottom: '1px solid #eee',
  backgroundColor: '#fff',
  margin: '5px 0',
  borderRadius: '8px'
};

export default Wallet;
