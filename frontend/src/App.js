import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/MainLayout';
import BooksLabrary from './components/BooksLabrary/BooksLabrary';
import ToDoList from './components/ToDoList/ToDoList';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="books" element={<BooksLabrary />} />
          <Route path="todolist" element={<ToDoList />} />
        </Route>
      </Routes>
      ;
    </BrowserRouter>
  );
}

export default App;
