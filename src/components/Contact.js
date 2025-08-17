
export default function Contact() {
  return (
    <section id="contact" className="relative">
      
      <div className="container px-5 py-5 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-background rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Contact Info</h1>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                kristinahgbrg@email.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONENUMBER
              </h2>
              <p className="leading-relaxed">073-089 21 58</p>
            </div>
          </div>
        </div>
    </section>
  );
}
