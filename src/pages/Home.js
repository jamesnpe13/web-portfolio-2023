import { useEffect, useState } from "react";
import "./Pages.scss";
import projects from "../projects.json";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
   const [projectsArray, setProjectsArray] = useState([]);

   useEffect(() => {
      setProjectsArray(projects);
   }, []);

   return (
      <div className="Home">
         <section className="hero">
            <img src={"assets/images/hero-name-gradient.png"} alt="" className="HeroImage" />
         </section>

         <section className="about">
            <div className="content-container"></div>
         </section>

         <section className="projects">
            {projectsArray.map((item) => {
               return <ProjectCard key={item.title} projectData={item} />;
            })}
         </section>
      </div>
   );
}
