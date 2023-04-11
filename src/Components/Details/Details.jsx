import { useLocation } from "react-router";

export const Details = () => {

  const location = useLocation();
  const state = location.state;
  console.log(state);

  return (
    <div>
      <h2 className="details-header">Article Details</h2>
      <img src={state.media[0]["media-metadata"][0].url} alt="Article Photo" className="details-img"/>
      <h3 className="details-title">{state.title}</h3>
      <p className="p-details">{state.byline}</p>
      <p className="p-details">Abstract: {state.abstract}</p>
      <p className="p-details">Published: {state.published_date}</p>
      <p className="p-details">Article Link: {state.url}</p>
    </div>
  )
}