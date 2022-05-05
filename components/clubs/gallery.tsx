
import { Box, Heading } from "@chakra-ui/react"
import { query, collection, where, onSnapshot } from "firebase/firestore"
import React, { useEffect, useState } from "react"
import { ClubComponent } from "../../types"
import { db } from "../../util/firebase"
import { useAuth } from "../auth/AuthUserProvider"
import styles from "../clubs/clubs.module.css"
import ClubCategory from "./ClubCategory"

type Props = {
  components: ClubComponent[]
}

const data: ClubComponent[] = [
  {
    category: "Sports",
    clubs: [
      { clubName: "Big Red Football", clubId: 1 },
      { clubName: "Big Red Volleyball", clubId: 2 },
      { clubName: "Womens Soccer", clubId: 3 },
      { clubName: "Club Tennis", clubId: 4 }
    ]
  },
  {
    category: "Project Teams",
    clubs: [
      { clubName: "Design Tech Initiative", clubId: 5 },
      { clubName: "Engineers Without Borders", clubId: 6 },
      { clubName: "Cornell Elective Vehicles", clubId: 7 },
      { clubName: "Engineering World Health", clubId: 8 }
    ]
  },
]
const Gallery = () => {
  const [clubs, setClubs] = useState<ClubComponent[] | null>(null)


  const clubsQuery = query(
    collection(db, "collections")
  )

  useEffect(() => {
    const unsubscribe = onSnapshot(taskQuery, (querySnapshot) => {
      const snapshotTasks: TaskWithId[] = querySnapshot.docs.map((doc) => {
        const data = doc.data() as Task
        return { ...data, id: doc.id }
      })
      setTasks(snapshotTasks)
    })
    return unsubscribe
  }, [])


  return (
    <>

      {data.map(component => {
        return (
          <ClubCategory key={component.category} component={component} />
        )
      })}


    </>
  )
}

export default Gallery