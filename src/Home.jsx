import './App.css'
import Dashboard from './Dashboard'
import ListMarkdown from './ListMarkdown'


export default function Home() {

  return (
    <div>
        <h1>Editeur de Markdown</h1>
        <Dashboard/>
        <ListMarkdown/>
    </div>
  )
}