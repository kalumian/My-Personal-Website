function Card_posts({ desc, title }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p className="desc">{desc}</p>
      <button>Read More</button>
    </div>
  );
}

export default Card_posts;
