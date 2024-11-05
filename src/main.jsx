import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import EditionMarkdown from './EditionMarkdown.jsx';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
    <HashRouter>
    <Routes>
      <Route path="/" exact element={<App />} />
      <Route path="/edit" exact element={<EditionMarkdown />} />
    </Routes>
  </HashRouter>
)
