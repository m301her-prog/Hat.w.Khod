import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// إذا كنت تستخدم ملف CSS خارجي، تأكد من وجوده أو احذف السطر التالي
// import './index.css' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
