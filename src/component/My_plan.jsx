import { useFirestore } from "../Database/useFirebase";
import Loader from "./Loader";
function My_plan() {
  const { data } = useFirestore();
  const setData = data.filter((i) => {
    return "plan" === i.id;
  });
  return (
    <section className="objectives mts" id="My-Plan">
      <h2 className="title">My Plan</h2>
      <div className="content">
        <div className="right">
          {setData[0] ? (
            <>
              <p>{setData[0].desc}</p>
            </>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </section>
  );
}

export default My_plan;
