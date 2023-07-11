import "./ProjectCard.scss";

export default function ProjectCard({ projectData }) {
   return (
      <div className="project-card">
         <div className="image-panel panel">
            <img src={`assets/images/${projectData.img}`} alt="" />
            <div className="bg-number">{projectData.number.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false })}</div>
         </div>

         <div className="info-panel panel">
            <header>
               <h2 className="title">{projectData.title}</h2>
               <h3 className="subheading">{projectData.subheading}</h3>
            </header>

            <main>
               <p className="description">{projectData.description}</p>
            </main>

            <footer>
               <button className="button-3D">View project</button>

               <button className="button-3D">Live site</button>
            </footer>
         </div>
      </div>
   );
}
