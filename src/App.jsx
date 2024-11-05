import './App.css';
import EditionMarkdown from './EditionMarkdown.jsx';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Home from './Home.jsx';



export default function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/edit" exact element={<EditionMarkdown />} />
    </Routes>
  </BrowserRouter>
  )
}