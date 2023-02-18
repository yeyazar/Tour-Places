import "./Card.scss";

const Card = (item) => {
    console.log(item);
  const { title, desc, image } = item;
  return (
    <div className="card-container">
      <div className="card-title">{title}</div>
      
      <img className="image" src={image} alt={title} />

      <div className="description">{desc}</div>
    </div>
  );
};

export default Card;
