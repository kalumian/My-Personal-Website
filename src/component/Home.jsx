// Import Components
import Header from "./Header";
import Sidebar from "./Sidebar";
import Me from "./Me";
import Education from "./Education";
import Skils from "./Skils";
import Experience from "./Experience";
import Projects from "./Projects";
import Certificates from "./Certificates";
import Hobbies from "./Hobbies";
import Objectives from "./Objectives";
import Contact from "./Contact";
import Footer from "./Footer";
import My_plan from "./My_plan";
import Posts from "./Posts";

// Impoer From NPM
import { useState } from "react";

function Home() {
  const [lung, setLung] = useState(false);
  return (
    <>
      <Header />
      <Sidebar setLung={setLung} lung={lung} />
      <Me lung={lung} />
      <Education lung={lung} />
      <Skils />
      <Experience lung={lung} />
      <Projects lung={lung} />
      <Certificates />
      <My_plan lung={lung} />
      <Hobbies lung={lung} />
      <Objectives lung={lung} />
      <Posts />
      <Contact lung={lung} />
      <Footer lung={lung} />
    </>
  );
}

export default Home;
