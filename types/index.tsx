import { Timestamp } from "firebase/firestore";
import { StringDecoder } from "string_decoder";

export type Club = {
  name: string
  email: string
  image: string
  description: string
  website: string
  president: string
  category: string
}

export type ClubWithId = Club & {
  id: string
}

export type ClubComponent = {
  category: string
  clubs: ClubWithId[]

}

export type Event = {
  id: string
  date: Timestamp
  description: string
  club: string
  likes: number
  name: string
}

export type Comment = {
  comment: string,
  eventId: string,
  userId: string
}

export type CommentWithId = Comment & {
  id: string
}

