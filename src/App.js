import logo from './logo.svg';
import './App.css';
import AddCourse from './component/AddCourse';
import SearchCourse from './component/SearchCourse';
import DeleteCourse from './component/DeleteCourse';
import ViewAllCourses from './component/ViewAllCourses';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddCourse />} />
        <Route path="/search" element={<SearchCourse />} />
        <Route path="/delete" element={<DeleteCourse />} />
        <Route path="/viewall" element={<ViewAllCourses />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
