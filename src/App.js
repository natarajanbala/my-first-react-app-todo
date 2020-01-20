import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import TodoList from './TodoList';

function App() {
  return (
    <div>
      <Header />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
