
import { Box, Heading, Spinner } from "@chakra-ui/react"
import { query, collection, where, onSnapshot } from "firebase/firestore"
import React, { useEffect, useState } from "react"
import { ClubComponent, ClubWithId } from "../../types"
import { db } from "../../util/firebase"
import { useAuth } from "../auth/AuthUserProvider"
import styles from "../clubs/clubs.module.css"
import ClubCategory from "./ClubCategory"


// const data: ClubComponent[] = [
//   {
//     category: "Sports",
//     clubs: [
//       { clubName: "Big Red Football", clubId: 1 },
//       { clubName: "Big Red Volleyball", clubId: 2 },
//       { clubName: "Womens Soccer", clubId: 3 },
//       { clubName: "Club Tennis", clubId: 4 }
//     ]
//   },
//   {
//     category: "Project Teams",
//     clubs: [
//       { clubName: "Design Tech Initiative", clubId: 5 },
//       { clubName: "Engineers Without Borders", clubId: 6 },
//       { clubName: "Cornell Elective Vehicles", clubId: 7 },
//       { clubName: "Engineering World Health", clubId: 8 }
//     ]
//   },
// ]

const clubsCollectionRef = query(
  collection(db, "clubs")
)
const clubQuery = query(clubsCollectionRef)
const Gallery = () => {
  const [clubs, setClubs] = useState<ClubWithId[] | null>(null)

  useEffect(() => {
    const unsubscribe = onSnapshot(clubQuery, (querySnapshot) => {
      const clubs = querySnapshot.docs.map(club => ({ ...club.data(), id: club.id } as ClubWithId))
      setClubs(clubs)
    }
    )
    return unsubscribe
  }, [])
  console.log(clubs)
  const data: ClubComponent[] =
    [{
      category: "Clubs",
      clubs: clubs ? clubs : []
    }]
  console.log(data)
  return (
    <>
      {
        data ? data.map(component => {
          return (
            <ClubCategory key={component.category} component={component} />
          )
        }) : <Spinner />}
    </>
  )
}

export default Gallery