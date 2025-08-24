

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        
        
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-primary">
            Kristina Högberg
            <br className="text-white hidden lg:inline-block" />I thrive when I get to combine technical knowledge with creative problem-solving!
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm an engineer who thrives on identifying and solving problems, especially in a team setting. My previous jobs and studies have taught me the importance of being cooperative, responsible, and service-oriented.
            Besides loving all kind of tech I enjoy long walks in nature, travelling, gaming and trail-running.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-buttonsp border-0 py-2 px-6 focus:outline-none hover:bg-hoversp rounded-lg text-lg">
              Contact me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-background border-0 py-2 px-6 focus:outline-none hover:bg-hover hover:text-white rounded-lg text-lg">
              See my past work
            </a>
          </div>
          </div>
          <div className="lg:max-w-md lg:w-2/3 md:w-1/2 w-1/3">
          <img
            className="object-cover object-center rounded-full border-4 border-background"
            alt="hero"
            src="/Portfolio_page/Copy.jpg"
          />
        </div>
        
        
      </div>
    </section>
  );
}

/*<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full border-4 border-slate-800"
            alt="hero"
            src="./Copy.jpg"
          />
        </div>*/