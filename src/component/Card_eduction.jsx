function Card_eduction({from,to,title,desc}) {
  return (
    <a>
      <div className="row">
        <div className="date">
          {from}<span className="space"> - </span> {to}
        </div>
        <div className="info">
          <h3>{title}</h3>
          <p>
           {desc}
          </p>
        </div>
      </div>
    </a>
  );
}

export default Card_eduction;
