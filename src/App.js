import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomePage from './components/Homepage/HomePage';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

function App() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/todos')
      .then(res => res.json())
      .then(data => {
        setTodos(data);
      });
  }, []);

  return (
    <>
      <Header />
      {todos && <HomePage todos={todos} setTodos={setTodos} />}
      <Footer />
    </>
  );
}

export default App;
