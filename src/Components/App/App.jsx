import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import { fetchArticles } from '../../apiCalls';
import { List } from '../List/List';
import { Details } from '../Details/Details';

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true)
    fetchArticles()
      .then(data => {
        setLoading(false);
        console.log(data.results)
        setArticles(data.results)
      })
      .catch(err => {
        console.log(err)
        setError("Failed to fetch articles.")
      })
  }, [])

  return (
    <div>
      <Routes>
        <Route path="/" element={<List articles={articles} />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  )
}

export default App
