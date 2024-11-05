import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useLocation, useNavigate } from 'react-router-dom';
import MarkdownFile from './class/MarkdownFile';
import './EditionMarkdown.css'

export default function EditionMarkdown() {
  const location = useLocation();
  const navigate = useNavigate();
  const [title, setTitle] = useState(location.state.title);
  const [content, setContent] = useState(location.state.content);

  const handleTitleChange = (e) => setTitle(e.target.value);

  const handleContentChange = (e) => setContent(e.target.value);

  function exportMarkdown(){
    const newFile = new MarkdownFile(title, content);
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title || 'fichier'}.md`;
    a.click();
    URL.revokeObjectURL(url);

    navigate('/');
  };

  const importMarkdown = (e) => {
    const file = e.target.files[0];
    if (file && file.name.endsWith('.md')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setContent(event.target.result);
        setTitle(file.name.slice(0, -3));
      };
      reader.readAsText(file);
    } else {
      alert('Veuillez sélectionner un fichier .md');
    }
  };

  return (
    <div>
      <h2>Édition du fichier Markdown</h2>
     <div id='allComp'>
     <div id='editionAndButtonPart'>
     <div id='editionMarkdown'>
        <div>
        <label>Titre :</label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="Entrez le titre du fichier"
          />
        </div>
          <div>
          <label>Contenu :</label>
          <textarea
            rows="30"
            cols="50"
            value={content}
            onChange={handleContentChange}
            placeholder="Écrivez le contenu Markdown ici"
          />
        </div>
      </div>
      <div id='exImMd'>
        <button onClick={exportMarkdown}>Exporter en .md</button>
        <label>Importer :</label>
        <input type="file" accept=".md" onChange={importMarkdown} />
      </div>
     </div>
      <div id='prevMarkdown'>
        <h3>Prévisualisation du fichier :</h3>
        <div className="preview">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
     </div>
    </div>
  );
};
