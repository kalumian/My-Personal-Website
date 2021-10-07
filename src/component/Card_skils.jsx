import js from "../image/js.png";

function Card_skils({ image, percent }) {
  return (
    <>
      <div className="card">
        <img src={image} alt="js" />
        <p className="info">
          <span className="percent">{percent}</span>
          <span className="line" style={{ width: percent }}></span>
        </p>
      </div>
    </>
  );
}

export default Card_skils;
