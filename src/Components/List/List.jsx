import { NavLink } from "react-router-dom";
import { ListCard } from "../ListCard/ListCard";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { Form } from "../Form/Form";

export const List = ({ filteredArticles, handleSearchInput }) => {

  const navigate = useNavigate();  

  const mappedFilteredArticles = filteredArticles.map(article => {
    return (
      <div key={article.id}>
        <NavLink to={`/details/${article.id}`} className="list-link" state={article}>
          <ListCard 
            title={article.title}
            id={article.id}
            author={article.byline}
          />
        </NavLink>
      </div>
    )
  });

  return (
    <div>
      <h1 className="list-title">Blanche's Times</h1>
      <Form handleSearchInput={handleSearchInput}/>
      <div className="list-container">
        {mappedFilteredArticles}
      </div>
    </div>
  )
}