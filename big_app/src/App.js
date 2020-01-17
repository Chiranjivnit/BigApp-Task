import React from 'react';
import Profile from './profile';
import './App.css';
import 'antd/dist/antd.css';
import UserRouter from './UserRouter';

function App() {
  return (
    <div >
      <UserRouter />
      <Profile />
    </div>
  );
}

export default App;
