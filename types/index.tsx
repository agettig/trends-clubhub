import { StringDecoder } from "string_decoder";

export type Club = {
  name: string;
  description: string;
  category: string;
  email: string;
  president: string;
  website: string;
};

export type ClubComponent = {
  category: string;
  clubs: Club[];
};

export type ClubInfo = Club & {
  followed: boolean;
  email: string;
  image: string;
  description: string;
  event: string;
};
