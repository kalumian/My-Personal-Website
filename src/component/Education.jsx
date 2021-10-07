import { Link } from "react-router-dom";
import { useFirestore } from "../Database/useFirebase";
import Card_eduction from "./Card_eduction";
import Loader from "./Loader";
function Education() {
  const { data } = useFirestore();
  console.log(data);
  const setData = data.filter((i) => {
    return "education" === i.id;
  });
  return (
    <section className="education mts" id="Education">
      {setData[0] ? (
        <>
          <h2 className="title">Eduction</h2>
          <div className="content">
            {setData[0].content
              .sort((a, b) => {
                return b.id - a.id;
              })
              .map((d) => {
                return (
                  <Card_eduction
                    title={d.title}
                    from={d.start}
                    to={d.end}
                    desc={d.desc}
                  />
                );
              })}
          </div>
        </>
      ) : (
        <Loader />
      )}
    </section>
  );
}

export default Education;
