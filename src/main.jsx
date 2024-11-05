import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import EditionMarkdown from './EditionMarkdown.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
    <BrowserRouter basename='/Web2-ProjetReact-Groupe1'>
    <Routes>
      <Route path="/" exact element={<App />} />
      <Route path="/edit" exact element={<EditionMarkdown />} />
    </Routes>
  </BrowserRouter>
)
