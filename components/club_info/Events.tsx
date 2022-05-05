import { Box, Flex, Heading } from "@chakra-ui/react";
import { query, collection, where, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../util/firebase";
import { Event } from "../../types"
import EventDetails from "./EventDetails";




type Props = {
  clubName: string | null;

};

const eventsCollectionRef = query(
  collection(db, "events")
)


// events query


const Events = ({ clubName }: Props) => {

  // hook for events
  const [events, setEvents] = useState<Event[] | null>(null)

  useEffect(() => {
    const eventQuery = query(eventsCollectionRef, where('hostClub', '==', clubName))
    const unsubscribe = onSnapshot(eventQuery, (querySnapshot) => {
      const eventArr = querySnapshot.docs.map(event => ({ ...event.data(), id: event.id } as Event))
      setEvents(eventArr)
    }
    )
    return unsubscribe
  }, [])

  console.log(events)
  return (
    <>
      <Heading size="md">Upcoming Events:</Heading>
      {events ? (events.map(event => {
        // return events if they exist or return message that no events are scheduled
        return (<EventDetails key={event.id} event={event} />)
      })) : <Box>No current events. Please check back later for updates.</Box>}
    </>

  )
}

export default Events
