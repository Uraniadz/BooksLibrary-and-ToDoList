import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/MainLayout';
import BooksLabrary from './components/BooksLabrary/BooksLabrary';
import ToDoList from './components/ToDoList/ToDoList';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Error from './components/Error/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="books" element={<BooksLabrary />} />
          <Route path="todolist" element={<ToDoList />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Error />
    </BrowserRouter>
  );
}

export default App;
