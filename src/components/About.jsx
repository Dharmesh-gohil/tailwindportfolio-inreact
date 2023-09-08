import aboutsvg from "./../assets/about.svg"
import SectionTitle from "./SectionTitle"

const About = () => {
    return (
        
     
      <section className="bg-white py-20 " id="about">
          <div className="align-element grid md:grid-cols-2 gap-16">
              <img src={aboutsvg} className="w-full h-64" />
              <article>
                  <SectionTitle text="code and coffe" />
                  <p className="text-slate-600 leading-loose mt-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat rerum sequi debitis eaque amet sit itaque eligendi temporibus voluptatibus ipsa.</p>
              </article>
         </div>
    </section>
           
  )
}
export default About