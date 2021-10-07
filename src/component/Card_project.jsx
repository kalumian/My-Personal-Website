function Card_project({ title, image, desc, linkB, linkG }) {
  return (
    <div className="projec_card">
      <div className="image">
        <img src={image} alt="image" />
      </div>
      <div className="info">
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="buttons">
          <a href={linkB} target="_blank">
            <button>Browse</button>
          </a>
          <a href={linkG} target="_blank">
            <button>Github</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card_project;
