import { NavLink } from "react-router-dom";
import { ListCard } from "../ListCard/ListCard";
import { useNavigate } from 'react-router-dom';

export const List = ({ articles }) => {

  const navigate = useNavigate();

  const mappedArticles = articles.map(article => {
    return (
      <div key={article.id}>
        <NavLink to={`/details/${article.id}`} className="list-link" state={article}>
          <ListCard 
            title={article.title}
            id={article.id}
          />
        </NavLink>
      </div>
    )
  });

  return (
    <div>
      <h1 className="list-title">Blanche's Times</h1>
      <form>
        
      </form>
      <div className="list-container">
      {mappedArticles}
      </div>
    </div>
  )
}