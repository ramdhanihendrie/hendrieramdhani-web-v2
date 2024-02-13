import { useAppSelector } from "@/redux/hooks";
import * as ReactIcons from "react-icons/si";

const socialMedia = () => {
  const socialMediaList = useAppSelector(
    (state) => state.landing.data.socialMedia,
  );

  return (
    <div className="mt-2 grid grid-flow-col justify-center gap-3 sm:justify-start">
      {socialMediaList.map((socialMedia, idx) => {
        const Icon = ReactIcons[socialMedia.icon];

        return (
          <a
            key={idx}
            href={socialMedia.link}
            target="_blank"
            className="text-3xl"
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
};

export default socialMedia;
