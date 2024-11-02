import React from 'react'
import { Link } from 'react-router-dom'
import MarkdownFile from './class/MarkdownFile'
import { useState, useEffect } from 'react';

export default function ListMarkdown() {
  const [markdownFiles, setMarkdownFiles] = useState(MarkdownFile.getAll());

  useEffect(() => {
    setMarkdownFiles([...MarkdownFile.getAll()]);
  }, []);



  return (
    <div>
      <h2>Liste des fichiers Markdown</h2>
      <ul>
        {markdownFiles.map((file, index) => (
          <li key={index}>
            <Link to="/edit" state={{ title: file.title, content: file.content }}>
              {file.title}
            </Link>
          </li>
      ))}
      <li key='new-file'>
        <Link to="/edit" state={{ title: '', content: '' }}>
          Créer un nouveau fichier.
        </Link>
      </li>
      </ul>
    </div>
  );
}