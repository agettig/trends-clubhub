import { ClubWithId } from "../../types";
import image from '../clubs/gymnastics.jpg';
import { Divider, Heading, Image, Box } from '@chakra-ui/react'
import Link from 'next/link'
import { query, collection, where, onSnapshot } from "firebase/firestore";
import { db } from "../../util/firebase";
import { useEffect, useState } from "react";
import Events from "./Events";


const event: string = "SAAC, NAMI To Host Mental Health Awareness Challenge From May 1-8"
type Props = {
    clubData: ClubWithId | null
}

const ClubInfo = () => {
    let url = ((new URL(window.location.href)))

    let clubName = url.searchParams.get('club')
    const [club, setClub] = useState<ClubWithId[] | null>(null)

    const clubsCollectionRef = query(
        collection(db, "clubs")
    )

    const clubQuery = query(clubsCollectionRef, where('name', '==', clubName))

    useEffect(() => {
        const unsubscribe = onSnapshot(clubQuery, (querySnapshot) => {
            const clubArr = querySnapshot.docs.map(club => ({ ...club.data(), id: club.id } as ClubWithId))
            setClub(clubArr)
        }
        )
        return unsubscribe
    })

    console.log("test")
    const clubData = club ? club[0] : null

    return (

        <>
            {clubData ? (
                <Box width="80%" margin="auto">
                    <Heading>{clubData.name}</Heading>
                    <p>Email: {clubData.email}</p>
                    {clubData.image ?? <Image src={clubData.image} alt="Image" />}
                    <p>Description: {clubData.description}</p>
                    <Divider />
                    <Events clubName={clubName} />
                </Box>)
                : <Box></Box>}
        </>)
}

export default ClubInfo