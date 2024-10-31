import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function EditionMarkdown() {
  const [title, setTitle] = useState('exemple');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => setTitle(e.target.value);

  const handleContentChange = (e) => setContent(e.target.value);

  function exportMarkdown(){
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title || 'fichier'}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importMarkdown = (e) => {
    const file = e.target.files[0];
    if (file && file.name.endsWith('.md')) {
      const reader = new FileReader();
      reader.onload = (event) => setContent(event.target.result);
      reader.readAsText(file);
    } else {
      alert('Veuillez sélectionner un fichier .md');
    }
  };

  return (
    <div>
      <h2>Édition du fichier Markdown</h2>

      <div>
        <label>Titre :</label>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Entrez le titre du fichier"
        />
      </div>

      <div id='featuresMarkdown'>
        <label>Contenu :</label>
        <textarea
          rows="10"
          value={content}
          onChange={handleContentChange}
          placeholder="Écrivez le contenu Markdown ici"
        />
        <div>
        <button onClick={exportMarkdown}>Exporter en .md</button>
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
  );
};
