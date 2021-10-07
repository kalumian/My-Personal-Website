import Card_skils from "./Card_skils";
import Card_language_skills from "./Card_language_skills";
import { useFirestore } from "../Database/useFirebase";
import Loader from "./Loader";
function Skils() {
  const { data } = useFirestore();
  console.log(data);
  const setDataPro = data.filter((i) => {
    return "skils-programming" === i.id;
  });
  const setDataLun = data.filter((i) => {
    return "skill-lung" === i.id;
  });
  const setDataGen = data.filter((i) => {
    return "skils-gen" === i.id;
  });
  return (
    <section className="skils mts" id="Skils">
      {setDataPro[0] ? (
        <>
          <h2 className="title">skills</h2>
          <div className="section">
            <h3>Programming skills :</h3>
            <div className="cards">
              {setDataPro[0].conent.map((d) => {
                return <Card_skils image={d.image} percent={`${d.p}%`} />;
              })}
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
      {setDataGen[0] ? (
        <>
          <div className="section general">
            <h3>general skills :</h3>
            <div className="content">
              <ul>
                {setDataGen[0].content.map((i) => {
                  return <li>{i}</li>;
                })}
              </ul>
              {setDataLun[0] ? (
                <>
                  <div className="language">
                    {setDataLun[0].content
                      .sort((a, b) => {
                        return b.p - a.p;
                      })
                      .map((d) => {
                        return (
                          <Card_language_skills
                            title={d.title}
                            percent={`${d.p}%`}
                          />
                        );
                      })}
                  </div>
                </>
              ) : (
                <Loader />
              )}
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </section>
  );
}

export default Skils;
