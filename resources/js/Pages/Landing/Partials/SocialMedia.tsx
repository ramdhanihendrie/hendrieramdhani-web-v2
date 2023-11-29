import { Link } from "@inertiajs/react";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const socialMedia = () => {
  const sosMedList = [
    { link: "https://github.com/ramdhanihendrie/" , Icon: FaGithub},
    { link: "https://linkedin.com/in/hendrieramdhani/" , Icon: FaLinkedin},
    { link: "https://instagram.com/ramdhanihendrie/" , Icon: FaInstagram},
    { link: "https://x.com/ramdhanihendrie/" , Icon: FaXTwitter},
  ]
  return (
    <div className="grid grid-flow-col gap-3 mt-2 justify-center sm:justify-start">
      {sosMedList.map((sosMed, idx) => (
        <a key={idx} href={sosMed.link} target="_blank" className="text-3xl">
          <sosMed.Icon />
        </a>
      ))}
    </div>
  )
}

export default socialMedia