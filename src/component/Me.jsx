import { useFirestore } from "../Database/useFirebase";
import Loader from "./Loader";
function Me({lung}) {
  const { data } = useFirestore();
  const setData = data.filter((i) => {
    return "me" === i.id;
  });

  console.log(setData[0]);
  return (
    <section className="me" id="Me">
      {setData[0] ? (
        <>
          <h2 className="title">Me</h2>
          <div className="content">
            <div className="left">
              <img src={setData[0].image} alt="me" />
            </div>
            <div className="right">
              <h3 className="title-2">{setData[0].title}</h3>
              <p>{setData[0].desc1}</p>
              <p>{setData[0].desc2}</p>
              <h5>Go to gallery</h5>
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </section>
  );
}

export default Me;
