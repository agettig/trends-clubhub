import { Box, Flex, Heading } from "@chakra-ui/react";
import { query, collection, where, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../util/firebase";
import { Event } from "../../types";
import EventDetails from "./EventDetails";

type Props = {
  clubName: string | null;
};

const eventsCollectionRef = query(collection(db, "events"));

// events query

const Events = ({ clubName }: Props) => {
  // hook for events
  const [events, setEvents] = useState<Event[] | null>(null);

  useEffect(() => {
    const eventQuery = query(eventsCollectionRef, where('club', '==', clubName))

    const unsubscribe = onSnapshot(eventQuery, (querySnapshot) => {
      const eventArr = querySnapshot.docs.map(
        (event) => ({ ...event.data(), id: event.id } as Event)
      );
      setEvents(eventArr);
    });
    return unsubscribe;
  }, []);

  const data = events || [];
  return (
    <>
      <Heading size="md">Upcoming Events:</Heading>
      {data.length === 0 ? (
        <Box>Sorry, no upcoming events. Please check back soon!</Box>
      ) : (
        data.map((event) => {
          // return events if they exist or return message that no events are scheduled
          return <EventDetails key={event.id} event={event} />;
        })
      )}
    </>
  );
};

export default Events;
