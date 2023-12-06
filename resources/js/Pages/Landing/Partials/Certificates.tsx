const certificateList = [
  {id: "1", name: "React JS for Web Development"},
  {id: "2", name: "Front End Developer"},
  {id: "3", name: "The Complete Front End Web Development"},
  {id: "4", name: "Speaker WebDev Class"},
  {id: "5", name: "Web Development Course NodeJS"},
  {id: "6", name: "Belajar Dasar Pemrograman Web"},
]

export default function Certificates () {
  return (
    <div>
      <h3 className="text-indigo-500 font-semibold text-2xl mt-20">Certificates:</h3>
      <p className="text-justify tracking-wide leading-7 mt-3">I have learned several skills through courses, certifications and other events, here are some of the skill certificates I have.</p>
      <div className="columns-1 md:columns-2 gap-0 xl:px-40">
        {
          certificateList.map((certificate) => {
            return (
              <div key={certificate.id} className="break-inside-avoid p-5">
                <img 
                  src={`assets/certificates/${certificate.name}.jpg`} 
                  alt={certificate.name} 
                  loading="lazy"
                />
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
