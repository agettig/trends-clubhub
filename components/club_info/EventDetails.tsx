import { Box, Divider, Heading } from "@chakra-ui/react";
import { Event } from "../../types"

type Props = {
  event: Event
};

const EventDetails = ({ event }: Props) => {

  return (
    <>
      <Box border="thin" borderColor="black">
        <strong>{event.name}</strong>
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
