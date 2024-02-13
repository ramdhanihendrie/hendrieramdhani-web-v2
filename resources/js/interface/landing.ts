export interface HeroProps {
  greeting: string;
  full_name: string;
  position: string;
  image: string;
  file: string;
}

import * as ReactIcons from "react-icons/si";
type icon = keyof typeof ReactIcons;
export interface TechProps {
  id: number;
  name: string;
  icon: icon;
}

export interface EducationProps {
  id: number;
  school: string;
  description: string;
}

export interface CertificateProps {
  id: number;
  name: string;
  image: string;
}

export interface ProjectProps {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  repo: string;
}

export interface ISocialMedia {
  name: string;
  link: string;
  icon: icon;
}
