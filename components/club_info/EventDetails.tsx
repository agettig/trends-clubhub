import { Box, Divider, Heading, Button } from "@chakra-ui/react";
import { Event } from "../../types"
import { collection, doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../util/firebase";


type Props = {
  event: Event
};

const EventDetails = ({ event }: Props) => {

  const [liked, setliked] = useState(false)
  const like = () => {
    // const eventRef = collection(db, "tasks")
    // const docRef = doc(eventRef, event.id)
    // updateDoc(docRef, {likes: event.likes+1});
    if (liked) {
      setliked(false)
    }
    else {
      setliked(true)
    }
  }

  if(liked) {
    return (
      <>
        <Box border="thin" borderColor="black">
          <strong>{event.name}</strong> <Button id="like" colorScheme="facebook" size='xs' onClick={like}>Liked!</Button>
          <br></br>
          {event.description}
          <br></br>
          {event.date.toDate().toDateString()}
          <br></br>
          {event.date.toDate().toTimeString()}
  
        </Box>
        <Divider />
      </>
    )
  }
  else{
    return (
      <>
        <Box border="thin" borderColor="black">
          <strong>{event.name}</strong> <Button id="like" colorScheme="facebook" size='xs' onClick={like}>Like</Button>
          <br></br>
          {event.description}
          <br></br>
          {event.date.toDate().toDateString()}
          <br></br>
          {event.date.toDate().toTimeString()}
  
        </Box>
        <Divider />
      </>
    )
  }
  
}

export default EventDetails
