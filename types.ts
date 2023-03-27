export type WorkingHour = {
  day: string;
  hours: string;
};
export type Elem = {
  navbarelem: string;
};
export type service = {
  title: string;
  cost: number;
  description: string;
};

export type OurService = {
  title: string;
  description: string;
  services: service[];
};

export type Review = {
  name: string;
  review: string;
  rating: number;
  image: any;
};

export type Employee = {
  name: string;
  email: string;
  phone: string;
  image: any;
  role: string;
  bio: string;
  fblink?: string;
  instalink?: string;
  twitterlink?: string;
};

export type GalleryPhotoType = {
  image: any;
};

export type FooterType = {
  title: string;
  description: string;
  logo: any;
  phone: string;
  email: string;
  address: string;
};

export type LandingData = {
  title: string;
  reviewsTitle: string;
  ourTeamTitle: string;
  ourTeamTitle2: string;
  workinghoursImageBackground: any;
};

export type ConctactData = {
  title: string;
  formTitle: string;
  mapTitle: string;
  informationTitle: string;
  informationDescription: string;
  description: string;
  address: string;
  phone: string;
  phone2: string;
  email: string;
};
