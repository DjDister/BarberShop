export type WorkingHour = {
  day: string;
  hours: string;
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
