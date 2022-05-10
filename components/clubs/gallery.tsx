
import { Spinner } from "@chakra-ui/react"
import { query, collection, onSnapshot } from "firebase/firestore"
import React, { useEffect, useState } from "react"
import { ClubComponent, ClubWithId } from "../../types"
import { db } from "../../util/firebase"
import ClubCategory from "./ClubCategory"

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
  const data: ClubComponent[] =
    [{
      category: "Clubs",
      clubs: clubs ? clubs : []
    }]
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