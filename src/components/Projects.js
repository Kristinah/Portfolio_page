import { projects } from "../data";
import { Link } from "react-router";
import { useState } from "react";


export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  return(
    <section id="projects" className="text-text bg-background body-font">
    <div className="container px-4 sm:px-5 py-10 sm:py-20 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-primary">
           Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Here are some of the projects I've been involved in, where I've focused on creating engaging, fun, and user-friendly applications. My goal is to always design with the user experience at the forefront.
          </p>
        </div>
        </div>

    <div className="flex flex-wrap -m-4">
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 mx-auto">
    {projects.map((project) => (
      <div
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer sm:max-w-sm w-full h-full p-2 shadow-xl bg-card hover:bg-background rounded-lg overflow-hidden max-w-md mx-auto transition-all hover:scale-105"
            >
      <div className="flex flex-col h-full">
      <img src={project.image} alt="image" className="h-60 sm:h-80 w-[calc(100%-16px)] m-2 object-fill object-cover rounded bg-background mb-2" />
      
      <div className="w-full h-max rounded px-3.5 py-2.5 flex flex-col flex-grow">
      <h1 className="title-font text-xl font-medium text-primary mb-3 text-center">
                    {project.title}
                  </h1>
        <h2 className="tracking-widest text-center text-sm title-font font-medium text-textsp mb-1">{project.technologies}</h2>
        <p className="leading-relaxed ">{project.summary}
        
        </p>
      </div>
        <div className="mb-2 text-center">
        {/*<button className="inline-block text-center text-white py-1 px-2 focus:outline-none hover:bg-white hover:text-black rounded-lg text-lg">View Project</button>*/}
        <button className="inline-block text-center py-1 px-2 focus:outline-none hover:bg-hover hover:text-white rounded-lg text-lg">View Project</button>
        </div></div>
      
      </div>
    
    ))}
    </div>
    
    </div>
    {/* Enlarged Project Modal */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="text-text bg-background rounded-lg max-w-2xl w-full p-4 sm:p-6 relative flex flex-col md:flex-row gap-6"
          >
  <div className="flex-1 flex flex-col gap-2">
    {selectedProject.secimage && (
      <img
        src={selectedProject.secimage}
        alt="Project screenshot"
        className="w-full max-h-64 sm:max-h-96 rounded-lg object-cover"
      />
    )}

    {selectedProject.video && (
      <img
        src={selectedProject.video}
        controls
        className="w-full h-auto rounded-lg object-cover"
      />
    )}
  </div>
             <div className="flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-4">
            <h2 className="sm:text-2xl text-xl font-bold text-primary" >{selectedProject.title}</h2>
            <button
              onClick={() => setSelectedProject(null)}
    className="px-2 py-1 rounded hover:bg-hover hover:text-white transition rounder-lg" >
    ✕
  </button></div>
            <p className="text-sm sm:text-base text-textsp font-semibold mb-2">
              {selectedProject.technologies}
            </p>
            <p className="font-semibold mb-2">
              {selectedProject.role}
            </p>
            <p className="mb-4 whitespace-pre-line">{selectedProject.details || selectedProject.description}</p>
            <div className="mt-4">
              {selectedProject.link && (
    <a
      href={selectedProject.link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full sm:w-auto text-center bg-buttonsp text-white px-4 py-2 rounded hover:bg-hoversp"
    >
      Web Page
    </a>
  )}
           
          </div>
          </div>
          </div>
        </div>
      )}

     </section>
  /*<section id="projects" className="text-gray-400 bg-slate-800 body-font">
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
    
  
     </section>*/
  );


}
