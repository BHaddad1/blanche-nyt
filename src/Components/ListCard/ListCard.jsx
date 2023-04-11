export const ListCard = ({ title, id, author}) => {
  return (
    <div className="card-container" key={id}>
      <h2 className="title">{title}</h2>
      <p>{author}</p>
    </div>
  )
}