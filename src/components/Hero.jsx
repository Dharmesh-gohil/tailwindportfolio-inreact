import heroImg from './../assets/hero.svg';
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';


const Hero = () => {
  return (

    <div className="bg-violet-200 py-24">
        <div className="align-element grid md:grid-cols-2 items-center gap-2" >
        <article>
          <h1 className='text-7xl font-bold tracking-wider'>
            I'm Dharmesh
          </h1>
          <p className='text-3xl mt-4 text-slate-700 capitalize tracking-wide' >
            front-end developer
          </p>
          <p className='mt-2 capitalize text-slate-700 text-lg tracking-wide'>turning ideas into reality</p>
          <div className="flex gap-x-4 mt-4">
            <a href="https:www.github.com">
              <FaGithubSquare className='h-8 w-8 text-slate-700 hover:text-black duration-300'/>
            </a>
            
            <a href="https:www.twitter.com">
              <FaTwitterSquare className='h-8 w-8 text-slate-700 hover:text-black duration-300'/>
            </a>
            <a href="https:www.linkedin.com">
              <FaLinkedin className='h-8 w-8 text-slate-700 hover:text-black duration-300'/>
            </a>
            <a href="https:www.facebook.com">
              <FaFacebookSquare className='h-8 w-8 text-slate-700 hover:text-black duration-300'/>
            </a>
            <a href="https:www.instagram.com">
              <FaInstagramSquare className='h-8 w-8 text-slate-700 hover:text-black duration-300'/>
            </a>
</div>
        </article>
        <article className='hidden md:block' >
          <img src={ heroImg} className='h-80 lg:h-96' />
        </article>
        </div>
     </div>
  )
  
}

export default Hero