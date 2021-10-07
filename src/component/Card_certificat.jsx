function Card_certificat({ title, image }) {
  return (
    <div className="certificat">
      <img src={image} alt="image" />
      <h4>{title}</h4>
    </div>
  );
}

export default Card_certificat;
