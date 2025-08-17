import Nav from  "../components/Nav";


export default function Stamped() {
    return (
      <section id="Stamped">
        <main className="text-gray-400 bg-slate-800 body-font">
        <Nav />
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white text-center object-center">
              Poster
            </h1>
            <img
            className="object-cover object-center border-4 border-slate-800"
            alt="Poster from the course DM2350"
            src="./DM2350_Poster.jpg"
          />
          
             
        </div>
        </div>
        </main>
      </section>
    );
}