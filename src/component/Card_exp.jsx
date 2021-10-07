function Card_exp({ image, title, from, to, desc }) {
  return (
    <div className="exp_card">
      <img src={image} alt="img_exp" />
      <h3>{title}</h3>
      <p className="desc">{desc}</p>
      <p className="time">
        {from} {to}
      </p>
    </div>
  );
}

export default Card_exp;
