import { ClubInfo } from "../../types";
import image from '../clubs/gymnastics.jpg';
import { Heading, Image } from '@chakra-ui/react'
import Link from 'next/link'
import {Button, Box} from "@chakra-ui/react"

const clubData: ClubInfo = {
    clubName: "Big Red Football",
    clubId: 1,
    followed: false,
    email: "cufootball@cornell.edu",
    image: image.src,
    description: "The Cornell Big Red football team represents Cornell University in National Collegiate Athletic Association Division I Football Championship Subdivision college football competition as a member of the Ivy League. It is one of the oldest and most storied football programs in the nation.",
    event: "SAAC, NAMI To Host Mental Health Awareness Challenge From May 1-8"
}

const ClubInfo = () => {
    return (
    <>
        <Heading>{clubData.clubName}</Heading>
        <p>Email: {clubData.email}</p>
        <Image src={clubData.image} alt="Image"/>
        <p>Description: {clubData.description}</p>
        <br></br>
        <span>Upcoming Event:</span>
        <Link href="https://cornellbigred.com/news/2022/4/22/womens-track-field-saac-nami-to-host-mental-health-awareness-challenge-from-may-1-8.aspx" passHref>
            <a> 
                <u> {clubData.event} </u>
            </a>
        </Link> 
    </>
    )
  }
  
  export default ClubInfo