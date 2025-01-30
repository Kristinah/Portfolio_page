import { projects } from "../data";
export default function Grid() {
    return(

        <div className="flex flex-wrap -m-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {projects.map((project) => (
              <a
              href={project.role}
              key={project.image}
              >
              <div className="w-full rounded-lg border shadow-sm overflow-hidden max-w-xs mx-auto text-center">
              <img src={project.image} alt="image" className="w-[calc(100%-16px)] h-max rounded m-2" />
              <div className="w-full h-max rounded px-3.5 py-2.5">
              <h1 className="title-font text-lg font-medium text-white mb-3">
                            {project.title}
                          </h1>
                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">{project.technologies}</h2>
                
                <p className="leading-relaxed">{project.description}</p>
              </div>
              </div>
              </a>
            ))}

      </div>
    </div>
    );
}