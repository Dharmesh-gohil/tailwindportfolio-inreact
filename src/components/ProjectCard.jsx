import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

const ProjectCard = ({ url,img,title,text,github}) => {
  return (
    <article className='bg-white rounded-lg shadow-md hover:shadow-xl duration-300'>
      <img src={img} alt={ title}   className='w-full h-64 object-cover rounded-t-lg'/>
      <div className="capitalize p-8">
        <h2 className='tracking-wider text-xl font-medium'>{title}</h2>
        <p className='text-slate-700 mt-4 leading-loose'>{ text}</p>
        <div className='mt-4 flex gap-x-4'>
          <a href={url} >
            <TbWorldWww className='h-8 w-8 text-gray-500 hover:text-black duration-500'/>
          </a>
          <a href={github} >
            <FaGithubSquare className='h-8 w-8 text-gray-500 hover:text-black duration-500'/>
          </a>
          <a href={url} >
            <FaLinkedin className='h-8 w-8 text-gray-500 hover:text-black duration-500'/>
          </a>
           <a href={url} >
            <FaTwitterSquare className='h-8 w-8 text-gray-500 hover:text-black duration-500'/>
          </a>
      </div>
      </div>
    </article>
  )
}
export default ProjectCard