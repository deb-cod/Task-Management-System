import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomePage from './components/Homepage/HomePage';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import CompletedPage from './components/CompletedPage/CompletedPage';
import DeletedPage from './components/DeletedPage/DeletedPage';
import CreateEventPage from './components/CreateEventPage/CreateEventPage';

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
    // <>
    //   {todos && <Header todos={todos} />}
    //   {todos && <HomePage todos={todos} setTodos={setTodos} />}
    //   <Footer />
    // </>
    <Router>
      {todos && <Header todos={todos} />}
      <Routes>
        {todos && <Route path="/" element={<HomePage todos={todos} setTodos={setTodos} />} /> }
        <Route path="/create" element={<CreateEventPage setTodos={setTodos} />} />
        {todos && <Route path="/completed" element={<CompletedPage todos={todos} />} /> }
        {todos && <Route path="/deleted" element={<DeletedPage todos={todos} />} /> }
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
