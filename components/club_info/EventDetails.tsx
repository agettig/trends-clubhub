import { Box, Divider, Heading, Button } from "@chakra-ui/react";
import { ClubWithId, Event } from "../../types"
import { collection, doc, getDoc, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../util/firebase";


type Props = {
  event: Event
};

const EventDetails = ({ event }: Props) => {

  const [liked, setLiked] = useState(false)
  const [numLikes, setLikes] = useState(event.likes)

  const like = () => {
    const eventRef = collection(db, "events")
    const docRef = doc(eventRef, event.id)
    setLiked(!liked)
    const newLikes = !liked ? numLikes + 1 : numLikes - 1
    setLikes(newLikes)
    updateDoc(docRef, { likes: newLikes });

  }
  console.log(numLikes)
  return (
    <>
      <Box margin-top={2}>
        <strong>{event.name}</strong>
        <Button float="right" padding={2} margin={2} id="like" colorScheme={liked ? "pink" : "facebook"} size='xs' onClick={like}>{liked ? "Liked" : "Like"}</Button>
        <br></br>
        Number of Likes: {event.likes}
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


export default EventDetails
