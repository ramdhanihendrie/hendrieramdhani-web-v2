
export default function Hero (){
  return (
    <section id="hero" className="flex flex-col sm:flex-row-reverse justify-center sm:justify-around py-10 text-center sm:text-left items-center">
      <div>
        <img src="assets/images/me.png" alt="Picture of the author"  />
      </div>
      <div className="mt-5 sm:mt-0">
        <h2 className="text-3xl font-semibold">Hello, I'm</h2>
        <h1 className="text-5xl font-semibold">Hendrie Ramdhani</h1>
        <p className="py-6">Front-End Web Developer</p>
        <a 
          className="bg-indigo-500 rounded px-3 py-2 text-white" 
          href="assets/files/Hendrie Ramdhani-resume.pdf" 
          download
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
