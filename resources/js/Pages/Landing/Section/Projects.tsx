import ProjectCard from "../Partials/ProjectCard";

const projectList = [
  {
    id: 1, 
    title: "Threesula Profile", 
    desc: "Threesula is a digital agency that offers website development and other services. Threesula's website is developed using modern technologies such as ReactJS, TailwindCSS and other front-end web development frameworks.", 
    image: "/storage/images/threesula-profile.png",
    link: "https://www.threesula.com/", 
    repo: "https://github.com/threesula/profile"
  },
  {
    id: 2, 
    title: "Portfolio Website", 
    desc: "The website portfolio is a personal project built using Next.js and Tailwind CSS. The website is showcasing my skills and experiences in the field, and it's a great example of my proficiency in utilizing modern web development technologies.", 
    image: "/storage/images/portfolio-web.png",
    link: "https://hendrieramdhani.vercel.app/", 
    repo: "https://github.com/ramdhanihendrie/hendrieramdhani-web"
  },
  {
    id: 3, 
    title: "Threesula Portfolio", 
    desc: "Websites created using ReactJS, Tailwind CSS, and HeadlessUI with the micro front-end method. TThe website's main purpose is to showcase the portfolio of projects that have been carried out by the Threesula team. ", 
    image: "/storage/images/threesula-portfolio.png",
    link: "https://www.portfolio.threesula.com/", 
    repo: "https://github.com/threesula/portfolio"
  },
  {
    id: 4, 
    title: "Otello Gaming", 
    desc: "The project is a website platform for gamers, featuring a visually striking and user-friendly home page. The website is built using HTML, CSS, and JavaScript, and later developed using the Yii framework. ", 
    image: "/storage/images/otello-gaming.png",
    link: "https://ramdhanihendrie.github.io/otello-gaming/", 
    repo: "https://github.com/ramdhanihendrie/otello-gaming"
  },
  {
    id: 5, 
    title: "GDSC UIN Jakarta Profile", 
    desc: "A website for Google Developer Student Clubs UIN Jakarta, an organization that aims to empower and support students to become future developers. The website is built using HTML, CSS, Bootstrap and JavaScript", 
    image: "/storage/images/GDSC-UIN-Jakarta.png",
    link: "https://gdsc-uinjkt.github.io/", 
    repo: "https://github.com/gdsc-uinjkt/gdsc-uinjkt.github.io"
  },
  {
    id: 6, 
    title: "Calculator Web App", 
    desc: "The project is a web-based calculator application designed to be user-friendly and easy to use. The application is built using HTML, CSS, and JavaScript, ensuring that it is responsive and visually appealing.", 
    image: "/storage/images/calculator-app.png",
    link: "https://ramdhanihendrie.github.io/simple-calculator-js/", 
    repo: "https://github.com/ramdhanihendrie/simple-calculator-js"
  },
]

export default function Projects () {
  return (
    <section id="projects" className="container mx-auto pt-20 py-5">
      <h3 className="text-indigo-500 font-semibold text-2xl">Projects:</h3>
      <p className="text-justify tracking-wide leading-7 mt-3">I have worked on many projects over the course of being a Web Developer, here are a few of my live, real-world projects</p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto justify-center my-5 gap-5 w-3/4">
        {
          projectList.map((project) => {
            return(
              <ProjectCard 
                key={project.id}
                title={project.title} 
                desc={project.desc}
                image={project.image}
                link={project.link}
                repo={project.repo}
              />
            )
          })
        }
      </div>
    </section>
  );
}
