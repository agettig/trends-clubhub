import { Heading, Spinner, VStack } from "@chakra-ui/react"
import { collection, getDocs, query, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../util/firebase"
import { Event } from "../../types"
import Events from "./Events"

const eventsQuery = query(collection(db, "events"))

const EventsPage = () => {
  const [events, setEvents] = useState<Event[] | null>(null)

  useEffect(() => {
    // TODO: Update `tasks` state using snapshot (uncomment the following)
    const unsubscribe = onSnapshot(eventsQuery, (querySnapshot) => {
      const eventsData = querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id } as Event))
      setEvents(eventsData)
    })
    return unsubscribe
  }, [])

  return (
    <VStack spacing={4}>
      <Heading> All Events </Heading>
      {events ? <Events events={events} /> : <Spinner />}
    </VStack>
  )
}

export default EventsPage
