import image from "../image/project2.png";
import Card_certificat from "./Card_certificat";
import { useFirestore } from "../Database/useFirebase";
import Loader from "./Loader";

function Hobbies() {
  const { data } = useFirestore();
  const setData = data.filter((i) => {
    return "hobbies" === i.id;
  });
  return (
    <section className="hobbies mts" id="Hobbies">
      <h2 className="title">Hobbies</h2>
      <div className="section">
        <div className="cards">
          {setData[0] ? (
            <>
              {setData[0].content.map((d) => {
                return <Card_certificat title={d.title} image={d.image} />;
              })}
            </>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </section>
  );
}

export default Hobbies;
