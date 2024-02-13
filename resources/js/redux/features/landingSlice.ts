import {
  CertificateProps,
  EducationProps,
  HeroProps,
  ProjectProps,
  TechProps,
  ISocialMedia,
} from "@/interface/landing";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IAbout {
  title: String;
  description: String;
  techList: TechProps[];
}

interface IEducation {
  title: String;
  description: String;
  educationList: EducationProps[];
}

interface ICertificate {
  title: String;
  description: String;
  certificateList: CertificateProps[];
}

interface IProject {
  title: String;
  description: String;
  projectList: ProjectProps[];
}

interface IDataLanding {
  hero: HeroProps;
  about: IAbout;
  education: IEducation;
  certificate: ICertificate;
  project: IProject;
  socialMedia: ISocialMedia[];
}

interface ILandingSlice {
  data: IDataLanding;
}

const initialState: ILandingSlice = {
  data: {
    hero: {
      greeting: "",
      full_name: "",
      position: "",
      image: "",
      file: "",
    },
    about: {
      title: "",
      description: "",
      techList: [],
    },
    education: {
      title: "",
      description: "",
      educationList: [],
    },
    certificate: {
      title: "",
      description: "",
      certificateList: [],
    },
    project: {
      title: "",
      description: "",
      projectList: [],
    },
    socialMedia: [],
  },
};

export const landingSlice = createSlice({
  name: "landing",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<ILandingSlice>) => {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
});

export const { setData } = landingSlice.actions;
export default landingSlice.reducer;
