import image from "../image/project2.png";
import Card_certificat from "./Card_certificat";
import { useFirestore } from "../Database/useFirebase";
import Loader from "./Loader";

function Certificates() {
  const { data } = useFirestore();
  const setData = data.filter((i) => {
    return "courses" === i.id;
  });
  return (
    <section className="certificates mts" id="Certificates">
      <h2 className="title">Certificates</h2>
      <div className="content">
        {/* <div className="section">
          <h3>Academy</h3>
          <div className="cards">
            <Card_certificat title="From Google" image={image} />
            <Card_certificat title="From Google" image={image} />
            <Card_certificat title="From Google" image={image} />
            <Card_certificat title="From Google" image={image} />
          </div>
          <h5>Brows More</h5>
        </div> */}
        <div className="section">
          <h3>Courses</h3>
          {setData[0] ? (
            <>
              <div className="cards">
                {setData[0].content.map((d) => {
                  return <Card_certificat title={d.title} image={d.image} />;
                })}
              </div>
            </>
          ) : (
            <Loader />
          )}
          {/* <h5>Brows More</h5> */}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
