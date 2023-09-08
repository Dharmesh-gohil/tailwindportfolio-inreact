import { links } from './../data';

const Navbar = () => {

  return (
      <div className="bg-lime-200 h-18">
          <div className="mx-auto max-w-7xl px-8 py-4 flex flex-col justify-between sm:flex-row sm:gap-x-16 sm:item-center sm:py-8">
              <h2 className=" capitalize text-3xl font-bold">
              web<span className="text-emerald-600">Dev</span>
              </h2> 
              <div className="flex gap-x-3">
                  {links.map((link) => { 
                      const { id, href, text } = link
                      return (
                          <a key={id} href={href} className='capitalize text-lg tracking-wide hover:text-lime-600 duration-300'>{ text}</a>
                      )
                  })}
              </div>
          </div>
    </div>
  )
}
export default Navbar
