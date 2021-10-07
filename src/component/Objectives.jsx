import { useFirestore } from "../Database/useFirebase";
import Loader from "./Loader";

function Objectives() {
  const { data } = useFirestore();

  const setData = data.filter((i) => {
    return "objectives" === i.id;
  });

  return (
    <section className="objectives mts" id="Objectives">
      <h2 className="title">Objectives</h2>
      <div className="content">
        <div className="right">
          {setData[0] ? <p>{setData[0].desc}</p> : <Loader />}
        </div>
      </div>
    </section>
  );
}

export default Objectives;
