import axios from "axios";
import { useEffect, useState } from "react";

interface ICertificate {
  id: number;
  name: string;
  image: string;
}
const defaultCertificates:ICertificate[] = [];

export default function Certificates () {
  const [certificatesList, setCertificatesList]: [ICertificate[], (project: ICertificate[]) => void] = useState(defaultCertificates);
  
  useEffect(() => {
    axios.get<ICertificate[]>('/api/certificates').then(response => {
      setCertificatesList(response.data)
    })
  }, []);
  
  return (
    <div>
      <h3 className="text-indigo-500 font-semibold text-2xl mt-20">Certificates:</h3>
      <p className="text-justify tracking-wide leading-7 mt-3">I have learned several skills through courses, certifications and other events, here are some of the skill certificates I have.</p>
      <div className="columns-1 md:columns-2 gap-0 xl:px-40">
        {
          certificatesList.map((certificate) => {
            return (
              <div key={certificate.id} className="break-inside-avoid p-5">
                <img 
                  src={certificate.image} 
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
