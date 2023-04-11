export const fetchArticles = () => {
  return fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${import.meta.env.VITE_NYT_API_KEY}`)
    .then(res => {
      if (!res.ok) {
        throw new Error("Failed to fetch articles")
      } return res.json()
    })
}