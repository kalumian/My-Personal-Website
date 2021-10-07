import Image from "../image/exp.jpg";
import Card_exp from "./Card_exp";

function Experience() {
  return (
    <section className="experience mts" id="Experience">
      <h2 className="title">Experience</h2>
      <div className="cards">
        <Card_exp
          image={Image}
          title="Front End At BRIDGYFY"
          desc="I worked for a SAAS type company as Front End, and I created projects and gained professional experience from dealing with a team"
          from="2021"
        />
      </div>
    </section>
  );
}

export default Experience;
