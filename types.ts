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
