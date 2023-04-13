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
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    setLoading(true)
    fetchArticles()
      .then(data => {
        setLoading(false);
        setArticles(data.results);
        setFilteredArticles(data.results);
      })
      .catch(err => {
        setError("Failed to fetch articles.")
        setLoading(false);
      })
  }, [])

  const handleSearchInput = (search) => {
    const filtered = articles.filter(work => work.title.toLowerCase().includes(search))
    setFilteredArticles(filtered);
  }

  return (
    <div>
      {loading && <h2>Loading, please hold.</h2>}
      <Routes>
        <Route path="/" element={<List filteredArticles={filteredArticles} handleSearchInput={handleSearchInput}/>} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  )
}

export default App
