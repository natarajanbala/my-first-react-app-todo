import React from 'react';
import logo from './logo.svg';
import './App.css';

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

import Header from './Header';
import Footer from './Footer';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <Container className="p-3">
        <Jumbotron>
          <Header />
          <TodoList />
          <Footer />
        </Jumbotron>
      </Container>
    </div>
  );
}

export default App;
