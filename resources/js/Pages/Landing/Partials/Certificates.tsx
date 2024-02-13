import { CertificateProps } from "@/interface/landing";
import { useAppSelector } from "@/redux/hooks";

export default function Certificates() {
  const certificate = useAppSelector((state) => state.landing.data.certificate);

  return (
    <div>
      <h3 className="mt-20 text-2xl font-semibold text-indigo-500">
        {certificate.title} :
      </h3>
      <p className="mt-3 text-justify leading-7 tracking-wide">
        {certificate.description}
      </p>
      <div className="columns-1 gap-0 md:columns-2 xl:px-40">
        {certificate.certificateList.map((certificate: CertificateProps) => {
          return (
            <div key={certificate.id} className="break-inside-avoid p-5">
              <img
                src={certificate.image}
                alt={certificate.name}
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
