
import { skills } from "../data";
//import Level from "./components/Level";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
           I've mostly written code in Java, Java Enterprise Edition and Python. I've also done some basic javascript and PHP. Right now I'm working on acquring some skills in React and enjoying it a lot.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            
            //let test = Level(skill.level);
            <div key={skill.skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 flex-auto text-center rounded p-4 h-full items-center">
                <span className="title-font font-medium text-white">
                  {skill.skill}
                  <div className="w-full rounded bg-blue-400">
                  
                    <div style={{width:skill.width+"%"}} className="bg-primary rounded p-0.5 text-white bg-blue-800 text-center text-xs font-medium leading-none text-primary-100">
                      {skill.level}
                    </div>
                  </div>
                </span>
               
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
