import { projects } from "../data";
import { Link } from "react-router";


export default function Projects() {
  return(
  <section id="projects" className="text-gray-400 bg-slate-800 body-font">
    <div className="container px-5 py-5 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
           Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Here are some of the projects I've been involved in, where I've focused on creating engaging, fun, and user-friendly applications. My goal is to always design with the user experience at the forefront.
          </p>
        </div>
        </div>
    <div className="flex flex-wrap -m-4 px-5 py-5">
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 mx-auto">
    {projects.map((project) => (
      <a
      href={project.link}
      key={project.title}
      >
      <div className="w-full h-full p-2 shadow-xl bg-slate-700 hover:bg-slate-800 rounded-lg overflow-hidden max-w-md mx-auto">
      <img src={project.image} alt="image" className="h-80 w-[calc(100%-16px)] object-fill rounded hover:scale-105 shadow-xl m-2 bg-stone-900" />
      
      <div className="w-full h-max rounded px-3.5 py-2.5">
      <h1 className="title-font text-xl font-medium text-white mb-3 text-center">
                    {project.title}
                  </h1>
        <h2 className="tracking-widest text-center text-sm title-font font-medium text-green-400 mb-1">{project.technologies}</h2>
        <p className="leading-relaxed ">{project.summary}
        
        </p>
        <div className="container px-5 py-5 mx-auto text-center">
        <div className="inline-flex text-center text-white border-2 border-white shadow-xl py-1 px-2 focus:outline-none hover:bg-white hover:text-black rounded-lg text-lg">
        <Link to={project.link}>View Project</Link>
        </div></div>
      </div>
      </div>
      </a>
    ))}
    </div>
    
    </div>
    
  
     </section>
  );


  /* <div className="container px-5 py-5 mx-auto text-center"> 
        <video  width="750" height="500"
  poster="./Pepper-covid-hero.png"
  onClick={e => e.target.play()} 
  src="./Stamped-video.mp4">
</video>
</div>
</video>
  <div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
  <img className="size-40 object-scale-down" src="./Pepper-covid-hero.png" alt="ChitChat Logo" />
  <div>
    <div class="text-xl font-medium text-black dark:text-white">ChitChat</div>
    <p class="text-gray-500 dark:text-gray-400">You have a new message!</p>
  </div>
</div>
</div>
  <div className="inline-flex text-center text-white border-2 border-white shadow-xl py-1 px-2 focus:outline-none hover:bg-white hover:text-black rounded-lg text-lg">
            <Link to="/stamped">Stamped</Link>
        
        </div> 
  return (

    <section id="projects" className="text-gray-400 bg-gray-800 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
           Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.role}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-800 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.technologies}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );*/
}
