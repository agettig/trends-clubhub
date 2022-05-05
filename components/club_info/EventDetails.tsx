import { Box, Divider, Heading } from "@chakra-ui/react";
import { Event } from "../../types"

type Props = {
  event: Event
};

const EventDetails = ({ event }: Props) => {
  return (
    <>
      <Box>
        <Heading size='sm'>{event.name}</Heading>
        <Box>
          {event.date}
          <Divider />
          {event.description}
        </Box>
      </Box>
    </>
  )
}

export default EventDetails
