export const ListCard = ({ title, id}) => {
  return (
    <div className="card-container" key={id}>
      <h2 className="title">{title}</h2>
    </div>
  )
}