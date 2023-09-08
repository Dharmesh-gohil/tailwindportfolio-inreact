import ProjectCard from "./ProjectCard"
import SectionTitle from "./SectionTitle"
import { projects } from "../data"

const Projects = () => {
  return (
      <section className="py-20 align-element " id="projects">
          <SectionTitle text="Web-creation" />
          <div className="py-20 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => { 
          return <ProjectCard key={project.id}{...project}/>
        })}
          </div>
      </section>
  )
}
export default Projects