import { StringDecoder } from "string_decoder"

export type Club = {
  clubName: string
  clubId: number
  // img_source: string
}

export type ClubComponent = {
  category: string
  clubs: Club[]

}

export type ClubInfo = Club & {
  followed: boolean
  email: string,
  image: string,
  description: string,
  event: string
}

export type Category = "project-team" | "sports"

