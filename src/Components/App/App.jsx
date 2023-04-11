import { useEffect, useState } from 'react'
import './App.css'
import { fetchArticles } from '../../apiCalls';

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchArticles()
      .then(data => console.log(data.results))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>

    </div>
  )
}

export default App
