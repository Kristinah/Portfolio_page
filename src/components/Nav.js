import { Link } from "react-router";

export default function Nav() {
    return (
      <header className="bg-slate-800 md:sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-70">
        
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
            
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>
        

        <Link className="mr-5 hover:text-white" to="/">Back</Link>
        </nav>
        </div>
      </header>
    );
  }
  