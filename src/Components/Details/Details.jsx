import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import "./Details.css";

export const Details = () => {

  const location = useLocation();
  const state = location.state;

  return (
    <div className="details-container">
      <NavLink to="/" className="nav-link-details">Back Home</NavLink>
      <h2 className="details-header">Article Details</h2>
      <img src={state.media[0]["media-metadata"][0].url} alt="Article Photo" className="details-img"/>
      <h3 className="details-title">{state.title}</h3>
      <p className="p-details">{state.byline}</p>
      <a href={state.url} className="p-details">{state.url}</a>
      <p className="p-details">Abstract: {state.abstract}</p>
      <p className="p-details">Published: {state.published_date}</p>
    </div>
  )
}