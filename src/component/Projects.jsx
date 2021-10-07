import Card_project from "./Card_project";
import { useFirestore } from "../Database/useFirebase";
import Loader from "./Loader";
function Projects() {
  const { data } = useFirestore();
  const setData = data.filter((i) => {
    return "projects" === i.id;
  });
  return (
    <section className="project mts" id="Projects">
      <h2 className="title">Projects</h2>
      {setData[0] ? (
        <>
          {setData[0].content.reverse().map((d) => {
            return (
              <Card_project
                title={d.title}
                desc={d.desc}
                image={d.image}
                linkB={d.linkB}
                linkG={d.linkG}
              />
            );
          })}
        </>
      ) : (
        <Loader />
      )}
    </section>
  );
}

export default Projects;
