function Card_language_skills({ title, percent }) {
  return (
    <p>
      <h4>{title}</h4>
      <span>{percent}</span>
      <span className="line" style={{ width: percent }}></span>
    </p>
  );
}

export default Card_language_skills;
