import { Event } from "../../types"
import { Text, VStack } from "@chakra-ui/react"
import EventItem from "./EventItem"

type Props = {
    events: Event[]
};
  
const EventList = ({ events }: Props) => {
    return (
      <VStack>
        {events.length ? (
          events.map((event) => <EventItem key={event.id} event={event} />)
        ) : (
          <Text>There are no events right now.</Text>
        )}
      </VStack>
    )
}

export default EventList
